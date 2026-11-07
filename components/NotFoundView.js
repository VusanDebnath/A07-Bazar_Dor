import Link from "next/link";

export default function NotFoundView() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl">🛒</p>
      <h1 className="text-5xl font-bold mt-4">৪০৪</h1>
      <p className="text-gray-600 mt-3">
        দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>
      <Link
        href="/"
        className="btn border-none bg-green-600 text-white hover:bg-green-700 mt-6"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
