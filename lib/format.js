const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value) {
  return String(value).replace(/[0-9]/g, (d) => bnDigits[d]);
}

export function formatPrice(n) {
  return toBn(Number(n).toLocaleString("en-US"));
}

const units = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  pcs: "পিস",
};

export function unitBn(unit) {
  return units[unit] || unit;
}

export function changeInfo(change) {
  const pct = toBn(Math.abs(Number(change.pct)).toFixed(1));
  if (change.dir === "up") {
    return { text: `▲ ${pct}%`, color: "text-red-600" };
  }
  if (change.dir === "down") {
    return { text: `▼ ${pct}%`, color: "text-green-600" };
  }
  return { text: `— ${pct}%`, color: "text-gray-500" };
}
