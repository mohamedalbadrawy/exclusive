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
import { loginFormSchema, LoginFormValues } from "@/schema/login.schema"
import { signIn } from "next-auth/react";
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export default function LoginPage() {
const router =  useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema), defaultValues: {
      email: "",
      password: "",
    }
  })
  async function onSubmit(values: LoginFormValues) {
    console.log(values);

    try {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: '/'
      });

      console.log(res);
      if (res?.ok) {
        // go to home
        toast.success('Login successfully', {
          position: 'top-center'
        })
        router.push('/');
      } else {
        //shoe error
        toast.error(res?.error || 'Something went wrong',
          { position: 'top-center' });
      }

    } catch (error) {
      console.log(error);

    }

  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

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
                  <FormMessage />
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
                    <Input placeholder="*******" {...field} type="password" />
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