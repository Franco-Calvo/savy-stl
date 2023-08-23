"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Presentation/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ReduxProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savy Stl",
  description: "Changing 3D print",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (window.location.pathname.includes("/admin")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className="background">
        <ReduxProvider>
          {showNavbar && <Navbar />}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
