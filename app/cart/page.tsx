// Server-rendered cart page that fetches cart data before rendering checkout step one.
import { headers } from "next/headers";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import ProceedButton from "@/components/ProceedButton";
import { CartData } from "@/lib/types";

async function getCartData(): Promise<CartData> {
    const headerList = headers();
    const host = headerList.get("host") ?? "localhost:3000";
    const protocol = headerList.get("x-forwarded-proto") ?? "http";
    const response = await fetch(`${protocol}://${host}/api/cart`, { cache: "no-store" });
    if (!response.ok) {
        throw new Error("Failed to fetch cart data");
    }
    return response.json();
}

export default async function CartPage() {
    const cartData = await getCartData();

    return (
        <main className="mx-auto max-w-2xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Your Cart 🌿</h1>
            <section className="space-y-4">
                {cartData.cartItems.map((item) => (
                    <CartItem key={item.product_id} item={item} />
                ))}
            </section>
            <section className="mt-6">
                <OrderSummary
                    cartItems={cartData.cartItems}
                    shippingFee={cartData.shipping_fee}
                    discount={cartData.discount_applied}
                />
            </section>
            <section className="mt-6">
                <ProceedButton items={cartData.cartItems} />
            </section>
        </main>
    );
}
