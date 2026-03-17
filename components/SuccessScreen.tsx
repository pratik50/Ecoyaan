// Success state component shown after payment simulation completes.
"use client";

import { useRouter } from "next/navigation";

export default function SuccessScreen() {
    const router = useRouter();

    return (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <div className="mb-4 text-6xl text-green-600">✅</div>
            <h2 className="text-2xl font-bold text-gray-900">Order Placed Successfully!</h2>
            <p className="mt-2 text-gray-600">Thank you for shopping sustainably with Ecoyaan 🌿</p>
            <button
                onClick={() => router.push("/cart")}
                className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
                Continue Shopping
            </button>
        </div>
    );
}
