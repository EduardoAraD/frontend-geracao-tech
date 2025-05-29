import { useNavigate } from "react-router-dom";

import { useCart } from "../hooks/useCart";

import Button from "./Button";
import Card from "./Card";

const ItemCart  = () => {
  return (
    <div className="flex gap-5">
      <img
        className="object-cover rounded-xs max-h-12 h-full"
        width={70}
        src="/produc-image-1.jpeg" alt=""
      />
      <div className="flex flex-1 flex-col">
        <strong className="text-sm pb-2.5 text-dark_gray">
          Tênis nike Revolution 6 Next Nature Masculino
        </strong>
        <div className="flex justify-between items-center">
          <strong className="text-base text-dark_gray2">R$ 219,00</strong>
          <span className="line-through text-xs text-light_gray2 font-normal">R$ 219,00</span>
        </div>
      </div>
    </div>
  );
}

interface ModalCartProps {
  onClose: () => void;
}

const ModalCart = ({ onClose }: ModalCartProps) => {
  const { items, emptyCart } = useCart()
  const navigate = useNavigate()

  const isEmptyCart = items.length <= 0;

  function goToCart() {
    navigate('/carrinho');
    onClose();
  }

  return (
    <div className="absolute right-2.5 top-15 flex w-full max-w-[315px] shadow-2xl shadow-dark_gray overflow-hidden rounded-xl z-10">
      <Card>
        <Card.Title size="base">Meu Carrinho</Card.Title>
        <Card.Line />

        {isEmptyCart ? (
          <p className="text-sm text-dark_gray3 font-bold text-center">
            Carrinho vazio!
          </p>
        ): items.map(item => (
          <ItemCart key={item.id} />
        ))}

        <Card.Line />
        <div className="flex items-center justify-between">
          <strong className="text-base text-dark_gray">Valor Total:</strong>
          <strong className="text-base text-error">R$ 0,00</strong>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={emptyCart}
            className="cursor-pointer hover:brightness-110 duration-200">
            <span className="font-medium text-sm text-dark_gray2 underline">Esvaziar</span>
          </button>

          <div>
            <Button onClick={goToCart}>
              Ver Carrinho
            </Button>
          </div>
          
        </div>
      </Card>
    </div>
  );
}
 
export default ModalCart;