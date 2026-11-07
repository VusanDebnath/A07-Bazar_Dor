export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="skeleton h-5 w-48"></div>
      <div className="skeleton h-40 w-full rounded-2xl"></div>
      <div className="skeleton h-40 w-full rounded-2xl"></div>
      <div className="skeleton h-80 w-full rounded-2xl"></div>
    </div>
  );
}
