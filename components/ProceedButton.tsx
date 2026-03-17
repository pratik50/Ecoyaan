// Client-side button that stores cart in context and navigates to address step.
"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/lib/types";

interface ProceedButtonProps {
    items: CartItem[];
}

export default function ProceedButton({ items }: ProceedButtonProps) {
    const router = useRouter();
    const { setCartItems } = useCart();

    const handleProceed = () => {
        setCartItems(items);
        router.push("/checkout/address");
    };

    return (
        <button
            onClick={handleProceed}
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
            Proceed to Checkout
        </button>
    );
}
