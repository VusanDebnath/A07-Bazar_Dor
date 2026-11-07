import Link from "next/link";
import { formatPrice, unitBn, changeInfo } from "@/lib/format";

export default function ProductCard({ product }) {
  const change = changeInfo(product.change);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
          {product.image}
        </div>
        <div>
          <h3 className="font-semibold">{product.nameBn}</h3>
          <p className="text-xs text-gray-500">প্রতি {unitBn(product.unit)}</p>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-4">আজকের দাম</p>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">
          {formatPrice(product.today)}{" "}
          <span className="text-sm font-normal">টাকা</span>
        </p>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 ${change.color}`}
        >
          {change.text}
        </span>
      </div>
    </Link>
  );
}
