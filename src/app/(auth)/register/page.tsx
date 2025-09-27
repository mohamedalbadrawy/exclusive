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
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { formState, registerFormSchema, RegisterSchema } from "@/schema/register.schema"
import { handleRegister } from "@/services/register.services"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"




export default function RegisterPage() {
  const router = useRouter();
  const [action ,formAction] = useActionState(handleRegister , formState);
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerFormSchema)
    , defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    }
  })


  console.log(action);

  useEffect(()=> {
    if(action){
      if (!action.success && action.message) {
        toast.error(action.message , {position: "top-center"});
      }
      if (action.success && action.message) {
        toast.success(action.message , {position: "top-center"});
        router.push("/login");
      }
    }
  },[action , router]);
  

  return (
    <section className="py-20">
      <div className="container  mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <Form {...form}>
          <form action={formAction} className="space-y-8">

            {/* {name} */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mohamed Elbadrawy" {...field} />
                  </FormControl>
                  <FormMessage >{action?.error.name?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            {/* {email} */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="username@domain.com" {...field} />
                  </FormControl>
                  <FormMessage >{action?.error.email?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            {/* {password} */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" {...field} type="password"/>
                  </FormControl>
                  <FormMessage >{action?.error.password?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            {/* {rePassword} */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" {...field} type="password" />
                  </FormControl>
                  <FormMessage >{action?.error.rePassword?.[0]}</FormMessage>
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
                    <Input placeholder="*******" {...field} type="tel" />
                  </FormControl>
                  <FormMessage >{action?.error.phone?.[0]}</FormMessage>
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