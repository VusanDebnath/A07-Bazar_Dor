import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/api";

const bangla = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
});

export const metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default async function RootLayout({ children }) {
  const products = await getProducts();

  const seen = {};
  products.forEach((p) => {
    if (!seen[p.category]) {
      seen[p.category] = {
        slug: p.category,
        name: p.categoryNameBn,
        icon: p.categoryIcon,
      };
    }
  });
  const categories = Object.values(seen);

  return (
    <html lang="bn" data-theme="light">
      <body className={`${bangla.variable} min-h-screen flex flex-col`}>
        <Navbar categories={categories} />
        <PriceTicker products={products} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
