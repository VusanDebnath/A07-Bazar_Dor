import NotFoundView from "@/components/NotFoundView";
import { getProducts } from "@/lib/api";
import { changeInfo, formatAvg, formatPrice, unitBn } from "@/lib/format";
import Link from "next/link";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect(
      `/signin?reason=login&callbackUrl=${encodeURIComponent(`/product/${slug}`)}`,
    );
  }

  const all = await getProducts();
  const product = all.find((p) => p.slug === slug);

  if (!product) {
    return <NotFoundView />;
  }

  const change = changeInfo(product.change);
  const unit = unitBn(product.unit);

  // গতকালের তুলনায় কত টাকা বদলেছে
  const diff = Math.abs(product.today - product.yesterday);
  let summaryLine = "গতকালের তুলনায় আজ দাম অপরিবর্তিত আছে";
  if (product.change.dir === "up") {
    summaryLine = `গতকালের তুলনায় আজ দাম বেড়েছে · ${formatAvg(diff)} টাকা`;
  } else if (product.change.dir === "down") {
    summaryLine = `গতকালের তুলনায় আজ দাম কমেছে · ${formatAvg(diff)} টাকা`;
  }

  // প্রতিটা বাজারের গড় = (সর্বনিম্ন + সর্বাধিক) / ২
  const markets = product.markets.map((m) => ({
    ...m,
    avg: (m.min + m.max) / 2,
  }));

  const minPrice = Math.min(...markets.map((m) => m.min));
  const maxPrice = Math.max(...markets.map((m) => m.max));
  const avgPrice = Math.round(
    markets.reduce((sum, m) => sum + m.avg, 0) / markets.length,
  );

  const minMarket = markets.find((m) => m.min === minPrice);
  const maxMarket = markets.find((m) => m.max === maxPrice);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 flex gap-2 flex-wrap">
        <Link href="/" className="hover:underline">
          হোম
        </Link>
        <span>›</span>
        <Link
          href={`/category/${product.category}`}
          className="hover:underline"
        >
          {product.categoryNameBn}
        </Link>
        <span>›</span>
        <span className="text-gray-900">{product.nameBn}</span>
      </div>

      {/* Summary */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-green-50 flex items-center justify-center text-5xl">
            {product.image}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product.nameBn}</h1>
            <p className="text-sm text-gray-500">
              প্রতি {unit} · {product.categoryNameBn}
            </p>
            <p className="text-sm text-gray-700 mt-1">{summaryLine}</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl px-8 py-4 text-center">
          <p className="text-sm text-gray-600">আজকের দাম</p>
          <p className="text-4xl font-bold">{formatPrice(product.today)}</p>
          <p className="text-sm text-gray-600">টাকা / {unit}</p>
          <p className={`text-sm font-semibold mt-1 ${change.color}`}>
            {change.text}
          </p>
        </div>
      </div>

      {/* Price summary */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">দামের সারসংক্ষেপ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
            <p className="text-2xl font-bold text-green-600">
              {formatPrice(minPrice)}{" "}
              <span className="text-sm font-normal">টাকা</span>
            </p>
            <p className="text-xs text-gray-500">
              সবচেয়ে কম দামের বাজার: {minMarket.market}
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
            <p className="text-2xl font-bold text-red-600">
              {formatPrice(maxPrice)}{" "}
              <span className="text-sm font-normal">টাকা</span>
            </p>
            <p className="text-xs text-gray-500">
              সবচেয়ে বেশি দামের বাজার: {maxMarket.market}
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-500">গড় দাম</p>
            <p className="text-2xl font-bold">
              {formatPrice(avgPrice)}{" "}
              <span className="text-sm font-normal">টাকা</span>
            </p>
            <p className="text-xs text-gray-500">প্রতি {unit}-এর হিসাবে</p>
          </div>
        </div>
      </div>

      {/* Market table */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-left border-b border-gray-200">
                <th className="py-3 pr-4 font-medium">বাজার</th>
                <th className="py-3 pr-4 font-medium">বিভাগ</th>
                <th className="py-3 pr-4 font-medium text-right">সর্বনিম্ন</th>
                <th className="py-3 pr-4 font-medium text-right">সর্বাধিক</th>
                <th className="py-3 font-medium text-right">গড়</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((m) => (
                <tr
                  key={m.market}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="py-3 pr-4">{m.market}</td>
                  <td className="py-3 pr-4 text-gray-600">{m.division}</td>
                  <td className="py-3 pr-4 text-right whitespace-nowrap">
                    {formatPrice(m.min)} টাকা
                  </td>
                  <td className="py-3 pr-4 text-right whitespace-nowrap">
                    {formatPrice(m.max)} টাকা
                  </td>
                  <td className="py-3 text-right font-bold whitespace-nowrap">
                    {formatAvg(m.avg)} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
