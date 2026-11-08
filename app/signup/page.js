"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const name = form.get("name").trim();
    const email = form.get("email").trim();
    const password = form.get("password");
    const confirm = form.get("confirm");

    if (password.length < 8) {
      const msg = "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
      setError(msg);
      toast.error(msg);
      return;
    }
    if (password !== confirm) {
      const msg = "দুটো পাসওয়ার্ড মেলেনি";
      setError(msg);
      toast.error(msg);
      return;
    }

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error) {
      const msg = error.message || "সাইন আপ করা যায়নি, আবার চেষ্টা করুন";
      setError(msg);
      toast.error(msg);
      return;
    }

        await authClient.signOut();
        toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
        router.push("/signin");
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="text-sm text-gray-600 text-center mt-1">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl p-6 mt-6 space-y-4"
      >
        <div>
          <label className="text-sm font-medium">নাম</label>
          <input
            name="name"
            type="text"
            required
            placeholder="যেমন: রহিম উদ্দিন"
            className="input w-full bg-white border-gray-300 mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">ইমেইল</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="input w-full bg-white border-gray-300 mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            required
            placeholder="কমপক্ষে ৮ অক্ষর"
            className="input w-full bg-white border-gray-300 mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            name="confirm"
            type="password"
            required
            placeholder="আবার লিখুন"
            className="input w-full bg-white border-gray-300 mt-1"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn w-full border-none bg-green-600 text-white hover:bg-green-700"
        >
          {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
        </button>

        <p className="text-sm text-center">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="text-green-600 font-medium">
            সাইন ইন করুন
          </Link>
        </p>
      </form>

      <p className="text-center mt-6">
        <Link href="/" className="text-sm text-gray-500 hover:underline">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
