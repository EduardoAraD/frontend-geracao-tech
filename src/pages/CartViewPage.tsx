import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../hooks/useCart";

import Button from "../components/Button";
import BuyBox from "../components/BuyBox";
import Card from "../components/Card";
import CardInput from "../components/CardInput";
import ItemCart from "../components/ItemCart";
import Section from "../components/Section";
import ValueCart from "../components/ValueCart";

import { getFormatMoney } from "../utils/formatMoney";

const CartViewPage = () => {
  const { items } = useCart();
  const navigate = useNavigate()

  const [cep, setCep] = useState('')
  // const [descount, setDescount] = useState(0)
  // const [priceFreigh, setPriceFreigh] = useState(0)

  const { totalPrice, totalWithDescount } = useMemo(() => {
    const initialValue = 0;

    const totalPrice = items.reduce(
      (accumulator, itemCart) => {
        const valueProduct = itemCart.product.price * itemCart.quantity

        return accumulator + valueProduct;
      },
      initialValue,
    );

    const totalWithDescount = items.reduce(
      (accumulator, itemCart) => {
        const valueProduct = itemCart.product.price_with_discount * itemCart.quantity

        return accumulator + valueProduct;
      },
      initialValue,
    );

    return {
      totalPrice,
      totalWithDescount,
    }
  }, [items]);

  const total = useMemo(() => {
    return totalWithDescount;
  }, [totalWithDescount])

  async function handleGetValueFreight() {
    console.log('Freigh')
  }

  async function handleConfirmCart() {
    navigate('/confirmar-compra')
  }

  return (
    <main>
      <Section bgColor="bg-background">
        <Card>
          <Card.Title>MEU CARRINHO</Card.Title>
          <Card.Line />
          {items.map(item => (
            <ItemCart
              key={item.id}
              id={item.id}
              image={item.product.images.length > 0 ? item.product.images[0] : '/produc-image-1.jpeg'}
              name={item.product.name}
              color={item.color}
              size={item.size}
              quantitaty={item.quantity}
              price={item.product.price}
              priceWithDescount={item.product.price_with_discount}
              stock={item.product.stock}
            />
          ))}

          <ValueCart title="Total" price={totalPrice} priceWithDescount={totalWithDescount} />
        </Card>

        <Card>
          <CardInput
            id="discount_coupon"
            label="Cupom de desconto"
            onClick={() => {}}
            placeholder="Insira seu código"
          />
        </Card>

        <Card>
          <CardInput
            id="freight"
            label="Calculo do frete"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onClick={handleGetValueFreight}
            placeholder="Insira seu CEP"
          />
        </Card>

        <Card>
          <Card.Title>RESUMO</Card.Title>
          <Card.Line />
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-light_gray">Subtotal:</span>
            <span className="text-sm font-medium text-light_gray">R$ {getFormatMoney(totalWithDescount)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-light_gray">Frete:</span>
            <span className="text-sm font-medium text-light_gray">R$ {getFormatMoney(0)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-light_gray">Desconto:</span>
            <span className="text-sm font-medium text-light_gray">R$ {getFormatMoney(0)}</span>
          </div>
          <BuyBox total={total} />
        </Card>
      </Section>
      <section className="flex flex-col bg-white p-7.5 gap-5 rounded-sm">
        <BuyBox total={total} />

        <Button
          bgColor="warning"
          onClick={handleConfirmCart}
        >
          Continuar
        </Button>
      </section>
    </main>
  );
}
 
export default CartViewPage;
