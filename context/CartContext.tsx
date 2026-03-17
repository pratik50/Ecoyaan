// React Context provider for global cart items and shipping address state.
"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CartItem, ShippingAddress } from "@/lib/types";

interface CartContextValue {
    cartItems: CartItem[];
    shippingAddress: ShippingAddress | null;
    setCartItems: (items: CartItem[]) => void;
    setShippingAddress: (address: ShippingAddress) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);

    const value = useMemo(
        () => ({ cartItems, shippingAddress, setCartItems, setShippingAddress }),
        [cartItems, shippingAddress]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}
