import html2canvas from 'html2canvas';

import Button from "../components/Button";
import Card from "../components/Card";
import ItemLinePurchase from "../components/ItemLinePurchese";
import Section from "../components/Section";

const PurchaseCart = () => {

  function screenPage() {
    html2canvas(document.getElementById('#capture'))
      .then(canvas => {
        const dataURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.download = `recibo.png`;
        link.href = dataURL;
        link.click();
      })
  }

  return (
    <main>
      <Section bgColor="bg-background pb-20">
        <div className="flex flex-col w-full max-w-[720px] m-auto gap-10">
          <div id="#capture" className="flex w-full">
            <Card>
              <p className="text-6xl text-center mt-2.5">🎉</p>
              <h2 className="text-2xl font-bold text-dark_gray text-center" style={{ letterSpacing: 0.75 }}>
                Compra Realizada com sucesso!
              </h2>
              <Card.Line />
              <div className="flex flex-col gap-2.5">
                <Card.Title size="base">
                  Informações Pessoais
                </Card.Title>
                <ItemLinePurchase title='Nome' value='Francisco Antonio Pereira' />
                <ItemLinePurchase title='CPF' value='123465789-12' />
                <ItemLinePurchase title='E-mail' value='francisco@gmail.com' />
                <ItemLinePurchase title='Celular' value='(85) 55555-5555' />
              </div>
              <Card.Line />
              <div className="flex flex-col gap-2.5">
                <Card.Title size="base">
                  Informações de Entrega
                </Card.Title>
                <ItemLinePurchase title='Endereço' value='Rua João Pessoa, 333' />
                <ItemLinePurchase title='Bairro' value='Centro' />
                <ItemLinePurchase title='Cidade' value='Fortaleza, Ceará' />
                <ItemLinePurchase title='CEP' value='433-8800' />
              </div>
              <Card.Line />
              <div className="flex flex-col gap-2.5">
                <Card.Title size="base">
                  Informações de Pagamento
                </Card.Title>
                <ItemLinePurchase title='Titular do Cartão' value='FRANCISCO A P' />
                <ItemLinePurchase title='Final' value='*********2020' />
              </div>

              <Card.Line />

              <Card.Title size="base">
                Resumo da compra
              </Card.Title>

              <div className="flex gap-5">
                <img
                  className="object-cover rounded-xs max-h-12 h-full"
                  width={70} src="/produc-image-1.jpeg" alt=""
                />
                <strong className="flex-1 text-sm pb-2.5 text-dark_gray">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </strong>
              </div>

              <div className="flex flex-col bg-[#F6AA1C0C] border border-[#F6AA1C26] p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-dark_gray">Total</h3>
                  <span className="text-lg font-bold text-dark_gray">R$ 219,00</span>
                </div>
                <span className="text-xs font-medium text-light_gray text-right">
                  ou 10x de R$ 21,90 sem juros
                </span>
              </div>

              <button
                onClick={screenPage}
                className="mb-2.5 duration-200 m-auto cursor-pointer hover:brightness-110"
              >
                <span className="text-base underline text-dark_gray2 font-normal">Imprimir Recibo</span>
              </button>
            </Card>
          </div>

          <Button size="large" bgColor="warning">
            Voltar para Home
          </Button>
        </div>
      </Section>
    </main>
  );
}
 
export default PurchaseCart;