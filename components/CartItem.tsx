// Presentational cart row showing product image, quantity, price, and line total.
import Image from "next/image";
import { CartItem as CartItemType } from "@/lib/types";

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const lineTotal = item.product_price * item.quantity;

    return (
        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
            <Image
                src={item.image}
                alt={item.product_name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-lg object-cover"
            />
            <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.product_name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="text-sm text-gray-600">Rs. {item.product_price} each</p>
            </div>
            <p className="text-right text-lg font-semibold text-green-600">Rs. {lineTotal}</p>
        </div>
    );
}
