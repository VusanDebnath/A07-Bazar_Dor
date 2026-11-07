import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function Home() {
  const products = await getProducts();

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      <Hero />

      <section>
        <h2 className="text-xl font-bold mb-4">
          <span className="text-red-600">▲</span> আজ দাম বেড়েছে
        </h2>
        <ProductGrid products={risers} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          <span className="text-green-600">▼</span> আজ দাম কমেছে
        </h2>
        <ProductGrid products={fallers} />
      </section>

      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <p className="text-sm text-gray-600 mb-4">
          মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
