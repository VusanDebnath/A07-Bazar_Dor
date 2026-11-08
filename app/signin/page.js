"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email").trim();
    const password = form.get("password");

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      const msg = error.message || "সাইন ইন করা যায়নি, আবার চেষ্টা করুন";
      setError(msg);
      toast.error(msg);
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center">সাইন ইন</h1>
      <p className="text-sm text-gray-600 text-center mt-1">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl p-6 mt-6 space-y-4"
      >
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

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn w-full border-none bg-green-600 text-white hover:bg-green-700"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
        </button>

        <p className="text-sm text-center">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="text-green-600 font-medium">
            সাইন আপ করুন
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
