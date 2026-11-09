"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ currentName }) {
  const router = useRouter();
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmed = name.trim();
    if (!trimmed) {
      toast.error("নাম খালি রাখা যাবে না");
      return;
    }

    setLoading(true);
    const { error } = await authClient.updateUser({ name: trimmed });
    setLoading(false);

    if (error) {
      toast.error(error.message || "তথ্য আপডেট করা যায়নি, আবার চেষ্টা করুন");
      return;
    }

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4"
    >
      <div>
        <label className="text-sm font-medium">নাম</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="আপনার নতুন নাম লিখুন"
          className="input w-full bg-white border-gray-300 mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn w-full border-none bg-green-600 text-white hover:bg-green-700"
      >
        {loading ? "অপেক্ষা করুন..." : "তথ্য আপডেট করুন"}
      </button>
    </form>
  );
}
