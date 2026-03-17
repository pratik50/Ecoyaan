import { z } from "zod";

export const addressSchema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    pinCode: z.string().regex(/^\d{6}$/, "PIN Code must be exactly 6 digits"),
    city: z.string().min(2, "City must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
});

export type AddressFormValues = z.infer<typeof addressSchema>;
