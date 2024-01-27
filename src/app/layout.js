import "./globals.css";
import { Inter } from "next/font/google";
import ProgressProvider from "@/providers/ProgressProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blue Car",
    template: "%s - Blue Car",
  },
  description: "Blue Car is an POS Application create by NEXT JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
