export function getFormatMoney(value: number) {
  return value.toFixed(2).replace(".", ",")
}
