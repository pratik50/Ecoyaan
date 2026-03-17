// Client page that displays the shipping address form for checkout step two.
"use client";

import Link from "next/link";
import AddressForm from "@/components/AddressForm";

export default function AddressPage() {
    return (
        <main className="mx-auto max-w-2xl px-4 py-8">
            <Link href="/cart" className="text-sm text-green-600 hover:text-green-700">
                Back to Cart
            </Link>
            <h1 className="mt-3 mb-6 text-3xl font-bold text-gray-900">Shipping Address</h1>
            <AddressForm />
        </main>
    );
}
