import { getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";
import CategoryProducts from "@/components/CategoryProducts";
import NotFoundView from "@/components/NotFoundView";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const all = await getProducts();
  const products = all.filter((p) => p.category === slug);

  if (products.length === 0) {
    return <NotFoundView />;
  }

  const first = products[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-4">
        <div className="text-5xl">{first.categoryIcon}</div>
        <div>
          <h1 className="text-2xl font-bold">{first.categoryNameBn}</h1>
          <p className="text-sm text-gray-600">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <CategoryProducts products={products} />
    </div>
  );
}
