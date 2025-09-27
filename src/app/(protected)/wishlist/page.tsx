"use client"
import AddToCartBtn from '@/app/components/product/AddToCartBtn'
import { Button } from '@/components/ui/button'
import { useWishlist } from '@/context/WishlistContext'
import { removeFromWishlist } from '@/services/wishlist.services'
import { Badge, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

export default  function WishlistPage() {


  const { wishlistDetails, setWishlistDetails } = useWishlist()

  

  async function removeProductFromWishlist(productId: string) {
    const res = await removeFromWishlist(productId);
    if (res.massage) {
      toast.success("Product Removed", { position: "top-center" })
      setWishlistDetails(res.data)
    } else {
      toast.error(res?.massage || "Something went wrong", { position: "top-center" })
    }
  }

  return (<>
    <section className='py-20'>
      <div className="container mx-auto">
        <section className='flex justify-between by-20'>
          <h3 className=' text-xl'>Wishlist ({wishlistDetails?.count})</h3>
          <Button variant={"outline"} className='px-14 py-7' >Move all to Bag</Button>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-16 mb-20'>
          {
            wishlistDetails?.data.map((data) => (
              <div key={data._id} >
                <picture className='relative group overflow-hidden'>
                  <Badge
                    onClick={() => removeProductFromWishlist(data._id)}
                    className="absolute -top-4 -start-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                  >
                    <X />
                  </Badge>
                  <Link href={`/wishlist/${data._id}`}>
                    <Image src={data.imageCover}
                      width={270}
                      height={250}
                      alt={data.title}
                      loading='lazy'
                      className='w-full object-cover h-[16.625rem] bg-gray-200 mb-4' />
                  </Link>
                  <AddToCartBtn productId={data._id}
                    className='w-full absolute bottom-0 translate-y-full group-hover:translate-y-0  group-hover:flex invisible group-hover:visible'>

                  </AddToCartBtn>

                </picture>
                <h3 className='font-medium mb-2 line-clamp-1'>
                  <Link href={`/wishlist/${data._id}`}>{data.title}</Link>
                </h3>
                <div className='flex items-center gap-x-5 '>
                  <span className='text-red-500 font-medium'>{data.price} EGP</span>
                </div>
              </div>
            ))
          }

        </section>
      </div>
    </section>
  </>
  )
}
