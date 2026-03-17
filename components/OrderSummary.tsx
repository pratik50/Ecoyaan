// Summary card that calculates subtotal, shipping, discount, and grand total.
import { CartItem } from "@/lib/types";

interface OrderSummaryProps {
    cartItems: CartItem[];
    shippingFee: number;
    discount: number;
}

export default function OrderSummary({ cartItems, shippingFee, discount }: OrderSummaryProps) {
    const subtotal = cartItems.reduce(
        (total, item) => total + item.product_price * item.quantity,
        0
    );
    const grandTotal = subtotal + shippingFee - discount;

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Order Summary</h2>
            <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                <div className="flex justify-between text-sm text-gray-700">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                    <span>Shipping Fee</span>
                    <span>Rs. {shippingFee}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                    <span>Discount</span>
                    <span>{discount > 0 ? `- Rs. ${discount}` : "FREE"}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-bold text-gray-900">
                    <span>Grand Total</span>
                    <span>Rs. {grandTotal}</span>
                </div>
            </div>
        </div>
    );
}
