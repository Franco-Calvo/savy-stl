import Navbar from "@/Components/Presentation/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "../styles/globals.module.css";
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
  return (
    <html lang="en">
      <body className={styles.background}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
