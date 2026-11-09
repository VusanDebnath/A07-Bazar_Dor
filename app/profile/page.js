import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOutButton from "@/components/SignOutButton";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/signin?reason=login&callbackUrl=%2Fprofile");
  }

  const user = session.user;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-gray-600">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 text-2xl font-bold flex items-center justify-center overflow-hidden">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              user.name?.charAt(0)
            )}
          </div>
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
        <SignOutButton />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold">তথ্য</h2>
          <p className="text-sm text-gray-600">নাম: {user.name}</p>
        </div>
        <Link
          href="/profile/update"
          className="btn border-none bg-green-600 text-white hover:bg-green-700"
        >
          আপডেট করুন
        </Link>
      </div>
    </div>
  );
}
