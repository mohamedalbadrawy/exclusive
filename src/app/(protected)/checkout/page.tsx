"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { addressFormSchema, addressFormState, addressFormType } from "@/schema/address.schema"
import { handlePayment } from "@/services/order.services"
import { useCart } from "@/context/CartContext"
import { toast } from "sonner"




export default function CheckoutPage() {
    const { cartDetails, setCartDetails } = useCart()
    const router = useRouter();
    const [action, formAction] = useActionState(handlePayment, addressFormState);
    const form = useForm<addressFormType>({
        resolver: zodResolver(addressFormSchema), defaultValues: {
            cartId: "",
            details: "",
            city: "",
            phone: "",
            paymentMethod: "cash"
        }
    })

    useEffect(() => {
        if (cartDetails) {
            form.setValue("cartId", cartDetails.cartId)
        }
    }, [cartDetails , form])

    useEffect(() => {
        if (action) {

            if (action.success && action.message) {

                if (form.getValues("paymentMethod") === "cash") {
                    toast.success(action.message, { position: "top-center" });
                    setCartDetails(null)
                    router.push(action.callbackUrl || "/allproducts");

                } else {
                    window.location.href = action.callbackUrl as string ;
                }
            }
            else if (!action.success && action.message) {
                toast.error(action.message, { position: "top-center" });
            }
        }
    }, [action , form , router , setCartDetails]);
    console.log(action);

    return (
        <section className="py-20">
            <div className="container  mx-auto max-w-2xl">
                <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>
                <Form  {...form}>
                    <form action={formAction} className="space-y-8">

                        {/* {cartId} */}
                        <FormField
                            control={form.control}
                            name="cartId"
                            render={({ field }) => (
                                <FormItem hidden>
                                    <FormControl>
                                        <Input {...field} value={cartDetails?.cartId} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* {details} */}
                        <FormField
                            control={form.control}
                            name="details"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>details</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage >{action?.error.datails?.[0]}</FormMessage>
                                </FormItem>
                            )}
                        />
                        {/* {city} */}
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>city</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage >{action?.error.city?.[0]}</FormMessage>
                                </FormItem>
                            )}
                        />
                        {/* {phone} */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>phone number</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="tel" />
                                    </FormControl>
                                    <FormMessage >{action?.error.phone?.[0]}</FormMessage>
                                </FormItem>
                            )}
                        />
                        {/* {payment method} */}
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Payment method</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={"cash"}
                                            name={field.name}
                                            className="flex flex-col"
                                        >
                                            <FormItem className="flex items-center gap-3">
                                                <FormControl>
                                                    <RadioGroupItem value="cash" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Cash</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center gap-3">
                                                <FormControl>
                                                    <RadioGroupItem value="card" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Card</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}