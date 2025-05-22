import { InputIcon } from "primereact/inputicon";
import ValueCart from "./ValueCart";

interface ItemCartProps {
  image: string;
  name: string;
  color: string;
  size: string;
  quantitaty: number;
  totalPrice: number;
  descount: number
}

const ItemCart = ({ image, name, color, size, quantitaty, totalPrice, descount }: ItemCartProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <img
          className="object-cover rounded-xs max-h-12 h-full"
          width={70} src={image} alt=""
        />
        <div className="flex flex-1 flex-col">
          <strong className="text-sm pb-2.5 text-dark_gray">
            {name}
          </strong>
          <p className="text-xs font-medium text-light_gray">Cor: <strong>{color}</strong></p>
          <p className="text-xs font-medium text-light_gray">Tamanho: <strong>{size}</strong></p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <h5 className="font-medium text-sm text-dark_gray2 uppercase">Quantidade</h5>
        <div className="flex justify-between items-center">
          <button
            className="flex justify-center items-center w-20 h-8 border border-light_gray2 rounded-sm duration-200 hover:brightness-110"
          >
            <InputIcon className="pi pi-minus text-xs" />
          </button>
          <p className="text-xs font-bold text-dark_gray2">
            {quantitaty}
          </p>
          <button
            className="flex justify-center items-center w-20 h-8 border border-light_gray2 rounded-sm duration-200 hover:brightness-110"
          >
            <InputIcon className="pi pi-plus text-xs"/>
          </button>
        </div>
        <button className="self-center">
          <span className="text-xs text-dark_gray2 font-normal underline">Remover item</span>
        </button>
      </div>

      <ValueCart total={totalPrice} descountInPorcentage={descount} title="UNItário" />
      
    </div>
  );
}
 
export default ItemCart;