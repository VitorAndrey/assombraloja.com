import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { PointsContextProvider } from "@/contexts/PointsContext";
import { ShoppingListProvider } from "@/contexts/ShoppingList";

import { cn } from "@/lib/utils";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Assombraloja",
  description: "Promoções de matar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "bg-gray-200 min-h-screen antialiased w-full",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <PointsContextProvider>
            <ShoppingListProvider>
              <Header />
              {children}
              <Footer />
            </ShoppingListProvider>
          </PointsContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
