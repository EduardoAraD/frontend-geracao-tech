import { Link } from "react-router-dom";

import type { Product } from "../Model/Product";
import DescountBox from "./DescountBox";

const ProductCard = ({ id, price , descount, title, image, category, slug }: Product) => {
  const newPrice = (price * (1 - (descount / 100))).toFixed(2);

  return (
    <Link to={`/produtos/${slug}`}>
      <div className="flex flex-col gap-2.5 max-w-[155px]" key={id}>
        <div className="flex relative h-40 w-full max-w-[155px] p-2 bg-white rounded-md">
          <img src={image} className="rounded-md object-cover" alt={title} />
          <div className="flex absolute top-3.5 left-3.5">
            <DescountBox descount={descount} />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold text-light_gray">{category}</span>
          <p className="text-dark_gray2 line-clamp-1">{title}</p>
          <div className="flex gap-2">
            <span className="text-light_gray text-base font-normal line-through">${price}</span>
            <p className="text-dark_gray text-base font-bold">${newPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
 
export default ProductCard;