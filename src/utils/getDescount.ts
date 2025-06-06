interface Props {
  price: number;
  price_with_discount: number
}

export function getDescount({ price, price_with_discount }: Props) {
  return 100 - Number((100 * price_with_discount / price).toFixed(0));
}
