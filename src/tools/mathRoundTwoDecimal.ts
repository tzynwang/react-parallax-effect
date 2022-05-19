export default function mathRoundTwoDecimal(raw: number): number {
  return Math.round(raw * 100) / 100;
}
