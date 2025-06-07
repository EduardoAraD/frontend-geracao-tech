import { getFormatMoney } from "../utils/formatMoney";

interface ValueCartProps {
  title: string;
  price: number; // 1 = 1%
  priceWithDescount: number;
}

const ValueCart = ({ title, price, priceWithDescount }: ValueCartProps) => {
  return (
    <div className="flex items-center">
      <p className="flex-1 text-sm text-dark_gray2 font-medium uppercase">{ title }</p>
      <div className="flex h-7 items-center gap-2">
        <span className="text-xs font-normal text-light_gray2 line-through">R$ {getFormatMoney(price)}</span>
        <strong className="text-base text-dark_gray2">R$ {getFormatMoney(priceWithDescount)}</strong>
      </div>
    </div>
  );
}
 
export default ValueCart;
