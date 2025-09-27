"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useCart } from "@/context/CartContext"
import { removeFromCart, removeUserCart, updateQtyCart } from "@/services/cart.services"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

export default function CartPage() {

  const { cartDetails, setCartDetails } = useCart()

  async function removeCartItems() {
    const res = await removeUserCart();
    if (res.massage) {
      toast.success("Cart Items Removed", { position: "top-center" })
      setCartDetails(null)
    } else {
      toast.error(res?.massage || "Something went wrong", { position: "top-center" })
    }
  }

  async function removeProductFromCart(productId: string) {
    const res = await removeFromCart(productId);
    if (res.massage) {
      toast.success("Product Removed", { position: "top-center" })
      setCartDetails(res.data)
    } else {
      toast.error(res?.massage || "Something went wrong", { position: "top-center" })
    }
  }
  async function updateProductFromCart(productId: string, count: number) {
    const res = await updateQtyCart(productId, count);
    if (res.massage) {
      toast.success(res.massage, { position: "top-center" })
      setCartDetails(res.data)
    } else {
      toast.error(res.massage || "Something went wrong", { position: "top-center" })
    }
  }


  return (
    <section className="py-20">
      <div className="container mx-auto">
        {cartDetails && cartDetails.data.products.length > 0 ? (
          <>
            <section className="mb-20">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead >Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartDetails.data.products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell className="font-medium">
                        <div className="relative flex items-center gap-5">
                          <Badge
                            onClick={() => removeProductFromCart(product.product._id)}
                            className="absolute -top-4 -start-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                            variant="destructive"
                          >
                            <X />
                          </Badge>
                          <Image
                            src={product.product.imageCover}
                            width={54}
                            height={54}
                            alt={product.product.title}
                          />
                          <h2>{product.product.title}</h2>
                        </div>
                      </TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant={"outline"}
                            onClick={() => updateProductFromCart(product.product._id, product.count - 1)}
                          >
                            -
                          </Button>
                          <span>{product.count}</span>
                          <Button variant={"outline"}
                            onClick={() => updateProductFromCart(product.product._id, product.count + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{product.count * product.price}</TableCell>
                    </TableRow>
                  ))
                  }
                </TableBody>
              </Table>

              <div className="flex justify-between">
                <Button variant={"outline"}>
                  <Link href={'/'}>Return To Shop</Link>
                </Button>

                <Button variant={"destructive"}
                  onClick={removeCartItems}
                >
                  Remove All
                </Button>
              </div>
            </section>
            <section className="flex justify-between">
              <div className="flex items-center gap-4 w-5/12">
                <Input placeholder="Coupon Code" />
                <Button variant={"destructive"}>Apply Coupon</Button>
              </div>
              <div className="w-5/12 py-8 border border-gary-800 px-5 ">
                <h3 className="font-bold text-xl mb-6">Cart Total</h3>
                <ul className="divide-y divide-gray-400 ">
                  <li className="flex justify-between py-6">
                    <span>Subtotal:</span> <span>{cartDetails.data.totalCartPrice}</span>
                  </li>
                  <li className="flex justify-between py-6">
                    <span>Shiping:</span> <span>Free</span>
                  </li>
                  <li className="flex justify-between py-6">
                    <span>Total:</span> <span>{cartDetails.data.totalCartPrice}</span>
                  </li>
                </ul>
                <div className="flex  justify-center">
                  <Button variant={"destructive"} asChild >
                    <Link href={'/checkout'}>
                    Procees to Checkout
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="font-semibold text-2xl mb-4">Your Cart is Empty</h2>
            <Button variant={"outline"}>
              <Link href={'/'}>Return To Shop</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
