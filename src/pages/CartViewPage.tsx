import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCart } from "../hooks/useCart";

import type { Product } from "../Model/Product";
import Button from "../components/Button";
import BuyBox from "../components/BuyBox";
import Card from "../components/Card";
import CardInput from "../components/CardInput";
import ItemCart from "../components/ItemCart"
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";

import { getSomeProducts } from "../services/products";
import { getFormatMoney } from "../utils/formatMoney";
import { AppError } from "../utils/AppError";

const CartViewPage = () => {
  const { items } = useCart();
  const navigate = useNavigate()

  const [products, setProducts] = useState<Product[]>([])
  const [cep, setCep] = useState('')
  // const [descount, setDescount] = useState(0)
  // const [priceFreigh, setPriceFreigh] = useState(0)

  const { totalWithDescount } = useMemo(() => {
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
    if(items.length > 0) {
      navigate('/confirmar-compra')
    } else {
      toast.info("Sem item no carrinho!", {
        autoClose: 3000,
        theme: 'colored',
      })
    }
  }

  async function loadAllProducts() {
    try {
      const list = await getSomeProducts()

      setProducts(list);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Erro ao buscar produtos similares.'
      
      toast.error(title, {
        autoClose: 3000,
        theme: 'colored'
      })
    }
  }

  useEffect(() => {
    loadAllProducts();
  }, [])

  const isEmptyCart = items.length <= 0;

  return (
    <main>
      <Section bgColor="bg-background" className="lg:flex-row">
        <Card className="max-w-[890px]">
          <div className="md:flex hidden justify-between">
            <h3 className={`text-sm text-dark_gray2 font-bold`}>MEU CARRINHO</h3>
            <div className="flex gap-8 items-center mr-4">
              <span className="text-sm text-dark_gray2 font-medium">QUANTIDADE</span>
              <span className="text-sm text-dark_gray2 font-medium">UNITÁRIO</span>
              <span className="text-sm text-dark_gray2 font-medium">TOTAL</span>
            </div>
          </div>
          <div className="md:hidden flex">
            <Card.Title>MEU CARRINHO</Card.Title>
          </div>
          <Card.Line />
          {isEmptyCart && (
            <p className="text-dark_gray3 font-bold text-center">
              Carrinho vazio!
            </p>
          )}
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
          <div className="hidden gap-8 md:flex border-t border-light_gray2 pt-5">
            <CardInput
              id="discount_coupon"
              label="Cupom de desconto"
              onClick={() => {}}
              placeholder="Insira seu código"
            />
            <CardInput
              id="freight"
              label="Calculo do frete"
              value={cep}
              onChangeText={setCep}
              onClick={handleGetValueFreight}
              placeholder="Insira seu CEP"
            />
          </div>
        </Card>

        <Card className="md:hidden">
          <CardInput
            id="discount_coupon"
            label="Cupom de desconto"
            onClick={() => {}}
            placeholder="Insira seu código"
          />
        </Card>

        <Card className="md:hidden">
          <CardInput
            id="freight"
            label="Calculo do frete"
            value={cep}
            onChangeText={setCep}
            onClick={handleGetValueFreight}
            placeholder="Insira seu CEP"
          />
        </Card>

        <Card className="md:max-w-[260px]">
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

          <Button
            bgColor="warning"
            className="md:flex hidden"
            onClick={handleConfirmCart}
          >
            Continuar
          </Button>
        </Card>
      </Section>
      <section className="md:hidden flex flex-col bg-white p-7.5 gap-5 rounded-sm">
        <BuyBox total={total} />

        <Button
          bgColor="warning"
          onClick={handleConfirmCart}
        >
          Continuar
        </Button>
      </section>
      <Section bgColor="bg-background" className="md:flex hidden">
        <TitleSection title="Produtos Relacionados" showLink />

        <div className="flex flex-wrap gap-y-10 gap-x-2.5 md:gap-x-3.5 justify-start">
          {products.slice(0,2).map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}
 
export default CartViewPage;
