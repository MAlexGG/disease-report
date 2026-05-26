export function formatNumber(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatThousands(value) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function getRecoveredPercentage(recovered, total) {
  if (!total) return 0;
  return Number(((recovered / total) * 100).toFixed(1));
}