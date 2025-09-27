import z from "zod"

export const addressFormSchema = z.strictObject({
  cartId: z
    .string()
    .nonempty("Address details is required"),
  details: z
    .string()
    .nonempty("Address details is required")
    .min(3, "Name must be at least 3 characters"),
  city: z
    .string()
    .nonempty("City is required"),

  phone: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .regex(/^01[0-2,5][0-9]{8}$/, "Invalid Egyptian phone number"),
  paymentMethod: z
    .enum(["cash", "card"],
      { message: "Payment method is required" })
})

export type addressFormType = z.infer<typeof addressFormSchema>


export const addressFormState = {
  success: false,
  error: {
    cattId: [],
    datails: [],
    city: [],
    phone: [],
    paymentMethod: [],
  },
  message: null,
  callbackUrl: "",

}

export type addressFormStateType = {
  success: boolean;
  error: {
    cattId?: string[];
    datails?: string[];
    city?: string[];
    phone?: string[];
    paymentMethod?: string[];
  };
  message: string | null;
  callbackUrl?: string;
};