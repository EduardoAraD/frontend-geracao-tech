import Button from "../components/Button";
import BuyBox from "../components/BuyBox";
import Card from "../components/Card";
import CardInput from "../components/CardInput";
import ItemCart from "../components/ItemCart";
import Section from "../components/Section";
import ValueCart from "../components/ValueCart";

const CartViewPage = () => {
  return (
    <main>
      <Section bgColor="bg-background">
        <Card>
          <Card.Title>MEU CARRINHO</Card.Title>
          <Card.Line />
          <ItemCart
            image="/produc-image-1.jpeg"
            name="NOME"
            color="Vermelho/Branco"
            size="42"
            quantitaty={1}
            totalPrice={219}
            descount={10}
          />

          <ValueCart title="Total" descountInPorcentage={10} total={10} />
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
            onClick={() => {}}
            placeholder="Insira seu CEP"
          />
        </Card>

        <Card>
          <Card.Title>RESUMO</Card.Title>
          <Card.Line />
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-light_gray">Subtotal:</span>
            <span className="text-sm font-medium text-light_gray">R$ 219,00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-light_gray">Frete:</span>
            <span className="text-sm font-medium text-light_gray">R$ 0,00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-light_gray">Desconto:</span>
            <span className="text-sm font-medium text-light_gray">R$ 30,00</span>
          </div>
          <BuyBox total={219} />
        </Card>
      </Section>
      <section className="flex flex-col bg-white p-7.5 gap-5 rounded-sm">
        <BuyBox total={219} />

        <Button bgColor="warning">Continuar</Button>
      </section>
    </main>
  );
}
 
export default CartViewPage;
