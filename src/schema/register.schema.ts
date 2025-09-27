import z from "zod"

export const registerFormSchema = z.strictObject({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: z
    .email({
      message: "Please enter a valid email address",
    }),

  password: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters",
    }),

  rePassword: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters",
    }),

  phone: z
    .string()
    .nonempty({ message: "Phone number is required"})
    .regex(/^01[0-2,5][0-9]{8}$/, "Invalid Egyptian phone number"),
})
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  })

export type RegisterSchema = z.infer<typeof registerFormSchema>


export const formState = {
success: false,
error: {},
message: null,
}

export type formStateType ={
  success: boolean;
  error: {
    name?: string[];
    email?: string[];
    password?: string[];
    rePassword?: string[];
    phone?: string[];
  };
  message: string | null;
}