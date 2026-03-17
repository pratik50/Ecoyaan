// Shipping address form using React Hook Form with Zod validation.
"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/context/CartContext";
import { AddressFormValues, addressSchema } from "@/lib/validators";

const formFields: Array<{ name: keyof AddressFormValues; label: string; type: string }> = [
    { name: "fullName", label: "Full Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
    { name: "pinCode", label: "PIN Code", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "state", label: "State", type: "text" },
];

export default function AddressForm() {
    const router = useRouter();
    const { setShippingAddress } = useCart();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddressFormValues>({ resolver: zodResolver(addressSchema) });

    const onSubmit = (values: AddressFormValues) => {
        setShippingAddress(values);
        router.push("/checkout/payment");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Enter Your Address</h2>
            <div className="space-y-4">
                {formFields.map((field) => (
                    <div key={field.name}>
                        <label className="mb-1 block text-sm font-medium text-gray-700">{field.label}</label>
                        <input
                            type={field.type}
                            {...register(field.name)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                        <p className="mt-1 text-sm text-red-500">
                            {errors[field.name]?.message}
                        </p>
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
                Continue to Payment
            </button>
        </form>
    );
}
