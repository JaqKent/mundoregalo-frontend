// src/utils/logicPrice.ts
export function calculateOnlinePrice(
  stockPriceRaw: string | number,
  onlinePercentRaw: string | number
): number {
  const stockPrice =
    typeof stockPriceRaw === 'string'
      ? parseFloat(stockPriceRaw) || 0
      : stockPriceRaw;
  const onlinePercent =
    typeof onlinePercentRaw === 'string'
      ? parseFloat(onlinePercentRaw) || 0
      : onlinePercentRaw;

  const result = stockPrice * (1 + onlinePercent / 100);

  return Number(result.toFixed(2));
}
