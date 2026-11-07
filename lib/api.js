const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts(category) {
  const url = category
    ? `${BASE_URL}/products?category=${category}`
    : `${BASE_URL}/products`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();
    if (Array.isArray(json)) return json;
    return json.data || json.products || [];
  } catch (error) {
    return [];
  }
}
