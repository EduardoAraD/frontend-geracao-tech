import type { Product } from "../Model/Product";
import DescountBox from "./DescountBox"

const ProductCard = ({ id, price , descount, name, image, category }: Product) => {
  const newPrice = price * (1 - (descount / 100));

  return (
    <div className="flex flex-col gap-2.5 max-w-[155px]" key={id}>
      <div className="flex relative h-40 max-w-[155px] p-2 bg-white rounded-md">
        <img src={image} className="rounded-md object-cover"  alt="" />
        <div className="flex absolute top-3.5 left-3.5">
          <DescountBox descount={descount} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-light_gray">{category}</span>
        <p className="text-dark_gray2 line-clamp-1">{name}</p>
        <div className="flex gap-2">
          <span className="text-light_gray text-base font-normal line-through">${price}</span>
          <p className="text-dark_gray text-base font-bold">${newPrice}</p>
        </div>
      </div>
    </div>
  );
}
 
export default ProductCard;