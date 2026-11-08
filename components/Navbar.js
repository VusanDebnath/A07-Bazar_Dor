"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function Navbar({ categories }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const today = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

  async function handleSignOut() {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-xl">
            🛒
          </div>
          <div>
            <p className="font-bold text-lg leading-tight">বাজার দর</p>
            <p className="text-xs text-gray-600" suppressHydrationWarning>
              {today}
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {isPending ? (
            <div className="skeleton h-9 w-28"></div>
          ) : session ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center overflow-hidden">
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    session.user.name?.charAt(0)
                  )}
                </div>
                <span className="hidden sm:inline text-sm font-medium">
                  {session.user.name}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-xl shadow border border-gray-200 w-56 p-2 mt-2 z-50"
              >
                <li className="px-3 py-1 text-xs text-gray-500">
                  {session.user.email}
                </li>
                <li>
                  <Link href="/profile">আমার প্রোফাইল</Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-red-600">
                    সাইন আউট
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
                সাইন ইন
              </Link>
              <Link
                href="/signup"
                className="btn border-none bg-green-600 text-white hover:bg-green-700 btn-sm sm:btn-md"
              >
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto">
          {categories.map((c) => {
            const href = `/category/${c.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={c.slug}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${
                  active
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {c.icon} {c.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
