import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/widgets/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}><Header />{children}</body>
    </html>
  );
}
