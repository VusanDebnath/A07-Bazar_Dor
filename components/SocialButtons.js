"use client";

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SocialButtons() {
  async function handleSocial(provider) {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "সাইন ইন করা যায়নি, আবার চেষ্টা করুন");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <div className="h-px bg-gray-200 flex-1"></div>
        অথবা
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleSocial("google")}
          className="btn bg-white border-gray-300 text-sm"
        >
          Google দিয়ে চালিয়ে যান
        </button>
        <button
          type="button"
          onClick={() => handleSocial("github")}
          className="btn bg-white border-gray-300 text-sm"
        >
          GitHub দিয়ে চালিয়ে যান
        </button>
      </div>
    </div>
  );
}
