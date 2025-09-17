export function normalizeData(data: number[]): number[] {
  const max = Math.max(...data);
  return data.map((v) => v / max);
}
