"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/nav-menu";
import AuthProvider from "./auth-provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <Provider store={store}>
          <body className={inter.className}>
            <NavMenu />
            <section className="px-12">{children}</section>
          </body>
        </Provider>
      </AuthProvider>
    </html>
  );
}
