export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      <div className="skeleton h-64 w-full rounded-3xl"></div>

      <div className="space-y-4">
        <div className="skeleton h-6 w-40"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="skeleton h-32 rounded-2xl"></div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="skeleton h-6 w-40"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="skeleton h-32 rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
