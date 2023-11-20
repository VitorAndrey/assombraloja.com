import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

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
          "bg-zinc-50 min-h-screen font-sans antialiased w-full",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
