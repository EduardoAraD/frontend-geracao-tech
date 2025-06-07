import { useNavigate } from "react-router-dom";

import { useCart } from "../hooks/useCart";

import Button from "./Button";
import Card from "./Card";
import { getFormatMoney } from "../utils/formatMoney";
import { useEffect, useMemo, useRef } from "react";

interface ItemCartProps {
  image: string
  name: string
  price: number
  priceWithDescount: number
}

const ItemCart = ({ image, name, price, priceWithDescount }: ItemCartProps) => {
  return (
    <div className="flex gap-5">
      <img
        className="object-contain rounded-xs max-h-15 h-full"
        width={70}
        src={image} alt=""
      />
      <div className="flex flex-1 flex-col">
        <strong className="text-sm pb-2.5 text-dark_gray">
          { name }
        </strong>
        <div className="flex justify-between items-center">
          <strong className="text-base text-dark_gray2">R$ {getFormatMoney(priceWithDescount)}</strong>
          <span className="line-through text-xs text-light_gray2 font-normal">R$ {getFormatMoney(price)}</span>
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
  const op = useRef(null);

  const isEmptyCart = items.length <= 0;

  function goToCart() {
    navigate('/carrinho');
    onClose();
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        op.current &&
        !op.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const total = useMemo(() => {
    const initialValue = 0;

    return items.reduce(
      (accumulator, itemCart) => {
        const valueProduct = itemCart.product.price_with_discount * itemCart.quantity

        return accumulator + valueProduct;
      },
      initialValue,
    );
  }, [items])

  return (
    <div
      ref={op}
      className="absolute right-2.5 top-15 flex w-full max-w-[315px] shadow-2xl shadow-dark_gray overflow-hidden rounded-xl z-10">
      <Card>
        <Card.Title size="base">Meu Carrinho</Card.Title>
        <Card.Line />

        {isEmptyCart ? (
          <p className="text-sm text-dark_gray3 font-bold text-center">
            Carrinho vazio!
          </p>
        ): items.map(item => (
          <ItemCart
            name={item.product.name}
            price={item.product.price}
            image={item.product.images.length > 0 ? item.product.images[0] : '/produc-image-1.png'}
            priceWithDescount={item.product.price_with_discount}
            key={item.id}
          />
        ))}

        <Card.Line />
        <div className="flex items-center justify-between">
          <strong className="text-base text-dark_gray">Valor Total:</strong>
          <strong className="text-base text-error">R$ {getFormatMoney(total)}</strong>
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