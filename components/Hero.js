export default function Hero() {
  const today = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
          {today}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-gray-600 mt-4">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <a
          href="#সব-পণ্য"
          className="btn border-none bg-green-600 text-white hover:bg-green-700 mt-6"
        >
          সব পণ্য দেখুন
        </a>
      </div>

      <div className="text-9xl md:text-[10rem]">🧺</div>
    </section>
  );
}
