import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/nav-menu";
import AuthProvider from "./auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schmev's Site",
  description: "I am the bone of my swords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <NavMenu />
          <section className="px-12">{children}</section>
        </body>
      </AuthProvider>
    </html>
  );
}
