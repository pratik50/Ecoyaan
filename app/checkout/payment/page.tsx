// Client page for reviewing order details, simulating payment, and showing success.
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import OrderSummary from "@/components/OrderSummary";
import SuccessScreen from "@/components/SuccessScreen";
import { useCart } from "@/context/CartContext";

export default function PaymentPage() {
    const router = useRouter();
    const { cartItems, shippingAddress } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const shippingFee = 50;
    const discount = 0;

    useEffect(() => {
        if (!shippingAddress || cartItems.length === 0) {
            router.replace("/cart");
        }
    }, [cartItems.length, router, shippingAddress]);

    const addressFields = useMemo(
        () =>
            shippingAddress
                ? [
                    shippingAddress.fullName,
                    shippingAddress.email,
                    shippingAddress.phone,
                    shippingAddress.pinCode,
                    shippingAddress.city,
                    shippingAddress.state,
                ]
                : [],
        [shippingAddress]
    );

    const handlePayment = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (!shippingAddress || cartItems.length === 0) return null;
    if (isSuccess) return <main className="mx-auto max-w-2xl px-4 py-8"><SuccessScreen /></main>;

    return (
        <main className="mx-auto max-w-2xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Review & Pay</h1>
            <div className="space-y-6">
                <OrderSummary cartItems={cartItems} shippingFee={shippingFee} discount={discount} />
                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="mb-3 text-lg font-semibold text-gray-900">Shipping Address</h2>
                    <div className="space-y-1 text-sm text-gray-700">
                        {addressFields.map((value, index) => (
                            <p key={`${index}-${value}`}>{value}</p>
                        ))}
                    </div>
                </section>
            </div>
            <button
                onClick={handlePayment}
                disabled={isLoading}
                className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isLoading ? "Processing Payment..." : "Pay Securely 🔒"}
            </button>
        </main>
    );
}
