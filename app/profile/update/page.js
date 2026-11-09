import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/signin?reason=login&callbackUrl=%2Fprofile%2Fupdate");
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
        <p className="text-sm text-gray-600">
          আপনার নাম বদলে নতুন নাম সেভ করুন।
        </p>
      </div>

      <UpdateProfileForm currentName={session.user.name} />

      <p className="text-center">
        <Link href="/profile" className="text-sm text-gray-500 hover:underline">
          ← প্রোফাইলে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
