import { Link } from "react-router-dom";

import type { Product } from "../Model/Product";
import DescountBox from "./DescountBox";

import { getFormatMoney } from "../utils/formatMoney";
import { getDescount } from "../utils/getDescount";

const ProductCard = ({ id, price, slug, price_with_discount, name, categorys, images }: Product) => {
  const descount = getDescount({ price, price_with_discount })

  return (
    <Link to={`/produtos/${id}-${slug}`}>
      <div className="flex flex-col gap-2.5 max-w-[155px]" key={id}>
        <div className="flex relative h-40 w-full max-w-[155px] p-2 bg-white rounded-md">
          <img src={images[0]} className="rounded-md object-cover" alt={name} />
          <div className="flex absolute top-3.5 left-3.5">
            <DescountBox descount={descount} />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold text-light_gray">{categorys.map(item => item.name).join(', ')}</span>
          <p className="text-dark_gray2 line-clamp-1">{name}</p>
          <div className="flex gap-2">
            <span className="text-light_gray text-base font-normal line-through">${getFormatMoney(price)}</span>
            <p className="text-dark_gray text-base font-bold">${getFormatMoney(price_with_discount)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
 
export default ProductCard;
