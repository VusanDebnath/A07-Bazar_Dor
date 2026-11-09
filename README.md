# 🛒 বাজার দর (BazarDor)

**প্রয়োজনীয় পণ্যের দাম এক নজরে।**

বাজার দর একটি ওয়েব অ্যাপ, যেখানে চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার আজকের দাম, দামের পরিবর্তন এবং বিভিন্ন বাজারের সর্বনিম্ন, সর্বাধিক ও গড় দাম এক জায়গায় দেখা যায়।

🔗 **Live Link:** 
📦 **GitHub:** https://github.com/VusanDebnath/A07-Bazar_Dor

## ✨ Key Features

1. **আজকের বাজারদর এক নজরে:** Hero সেকশন, চলমান দামের ticker, আর "আজ দাম বেড়েছে / কমেছে" তালিকা।
2. **Category অনুযায়ী পণ্য:** প্রতিটি category-র আলাদা পেজ এবং active category হাইলাইট।
3. **দাম অনুযায়ী Sort:** ডিফল্ট, কম থেকে বেশি, বেশি থেকে কম। সংখ্যা হিসেবে সঠিকভাবে সাজায়, বাংলা সংখ্যায় দেখায়।
4. **বাজারভিত্তিক বিস্তারিত দাম:** প্রতিটি পণ্যের সর্বনিম্ন, সর্বাধিক ও গড় দাম, সাথে ১২টি বাজারের টেবিল (login করা user-এর জন্য)।
5. **Authentication:** BetterAuth দিয়ে Email/Password, Google এবং GitHub login, সাথে toast বার্তা।
6. **Protected route:** Product Details আর Profile পেজ login ছাড়া খোলা যায় না।
7. **প্রোফাইল আপডেট:** My Profile পেজ থেকে নাম বদলানো যায়।
8. **Responsive design:** মোবাইল, ট্যাবলেট ও ডেস্কটপে সঠিকভাবে কাজ করে। Loading skeleton ও 404 পেজ আছে।

## 🛠️ Technologies Used

| প্রযুক্তি | ব্যবহার |
|---|---|
| Next.js (App Router) | UI ও পেজ নেভিগেশন |
| Tailwind CSS + DaisyUI | স্টাইলিং ও responsive design |
| BetterAuth | Authentication (Email, Google, GitHub) |
| MongoDB Atlas | ব্যবহারকারীর ডেটা |
| react-hot-toast | Toast notification |
| JavaScript | প্রোগ্রামিং ভাষা |
| Vercel | Deployment |

## 🚀 Run Locally

1. Repository clone করুন:

   `git clone https://github.com/VusanDebnath/A07-Bazar_Dor.git`

2. প্রজেক্ট ফোল্ডারে গিয়ে প্যাকেজ ইনস্টল করুন:

   `npm install`

3. প্রজেক্টের root-এ `.env.local` ফাইল বানিয়ে নিচের চাবিগুলো দিন:

   - `MONGODB_URI`
   - `BETTER_AUTH_SECRET`
   - `BETTER_AUTH_URL` (যেমন `http://localhost:3000`)
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
   - `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`

4. Server চালু করুন:

   `npm run dev`

5. ব্রাউজারে `http://localhost:3000` খুলুন।

## 🌐 API

পণ্যের ডেটা এই API থেকে আসে: `https://openapi.programming-hero.com/api/bazardor`