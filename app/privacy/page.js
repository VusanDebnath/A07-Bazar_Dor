export const metadata = {
  title: "গোপনীয়তা নীতি | বাজার দর",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">গোপনীয়তা নীতি (Privacy Policy)</h1>
      <p className="text-sm text-gray-600">
        বাজার দর একটি শিক্ষামূলক প্রজেক্ট। এখানে আপনার তথ্য কীভাবে ব্যবহার করা
        হয় তা নিচে দেওয়া হলো।
      </p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">আমরা কোন তথ্য সংগ্রহ করি</h2>
        <p>
          অ্যাকাউন্ট খোলা বা সাইন ইন করার সময় আমরা আপনার নাম, ইমেইল ঠিকানা এবং
          (Google বা GitHub দিয়ে সাইন ইন করলে) প্রোফাইল ছবি সংগ্রহ করি। ইমেইল
          দিয়ে সাইন আপ করলে পাসওয়ার্ড এনক্রিপ্ট করা অবস্থায় সংরক্ষিত হয়।
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">তথ্য কীভাবে ব্যবহার হয়</h2>
        <p>
          এই তথ্য শুধু আপনাকে সাইন ইন করানো, আপনার প্রোফাইল দেখানো এবং পণ্যের
          বিস্তারিত পেজে প্রবেশের অনুমতি দেওয়ার জন্য ব্যবহার করা হয়। আমরা
          আপনার তথ্য বিক্রি বা তৃতীয় কোনো পক্ষের সাথে শেয়ার করি না।
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">যোগাযোগ</h2>
        <p>
          আপনার তথ্য নিয়ে কোনো প্রশ্ন বা তথ্য মুছে ফেলার অনুরোধ থাকলে যোগাযোগ
          করুন: sm.vusandebnath@gmail.com
        </p>
      </section>
    </div>
  );
}
