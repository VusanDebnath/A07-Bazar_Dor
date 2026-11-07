import { formatPrice, unitBn, changeInfo } from "@/lib/format";

export default function PriceTicker({ products }) {
  const items = [...products, ...products];

  return (
    <div className="bg-white border-b border-gray-200 overflow-hidden">
      <div className="ticker-track flex w-max">
        {items.map((p, i) => {
          const change = changeInfo(p.change);
          return (
            <div
              key={`${p.id}-${i}`}
              className="flex items-center gap-2 px-4 py-2 border-r border-gray-100 whitespace-nowrap text-sm"
            >
              <span>{p.image}</span>
              <span className="font-medium">{p.nameBn}</span>
              <span>
                {formatPrice(p.today)} টাকা/{unitBn(p.unit)}
              </span>
              <span className={`font-semibold ${change.color}`}>
                {change.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
