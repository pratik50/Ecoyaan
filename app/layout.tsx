// Root layout that applies global styling and wraps all pages with CartProvider.
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecoyaan Checkout",
  description: "Sustainable shopping checkout flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <CartProvider>
          <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 text-lg font-semibold">🌿 Ecoyaan</div>
          </nav>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
