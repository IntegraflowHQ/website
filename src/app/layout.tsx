import Nav from "@/components/Nav/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integraflow",
  description:
    "Integraflow provides tools to redefine customer experience with organic feedback and behavioural data in real-time. Enjoy intuitive designs, open source surveys, advanced analytics, seamless collaboration on the go.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <>{children}</>
      </body>
    </html>
  );
}
