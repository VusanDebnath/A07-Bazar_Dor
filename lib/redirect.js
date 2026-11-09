export function getCallbackUrl() {
  if (typeof window === "undefined") return "/";

  const url = new URLSearchParams(window.location.search).get("callbackUrl");

  // শুধু নিজের সাইটের ভেতরের ঠিকানায় যেতে দেবে
  if (url && url.startsWith("/") && !url.startsWith("//")) {
    return url;
  }
  return "/";
}
