import Button from "../components/Button";
import BuyBox from "../components/BuyBox";
import Card from "../components/Card";
import LabelInput from "../components/LabelInput";
import Radio from "../components/Radio";
import Section from "../components/Section";

const ConfirmadBuy = () => {
  return (
    <main>
      <Section bgColor="bg-background">
        <h2 className="text-lg font-bold text-dark_gray mb-2.5">Finalizar Compra</h2>
        <Card>
          <Card.Title>Informações Pessoais</Card.Title>
          <Card.Line />
          <LabelInput>
            <LabelInput.Label htmlFor="name">Nome Completo *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu nome"
              id="name"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="cpf">CPF *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu CPF"
              id="cpf"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="email">E-mail *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu email"
              id="email"
              type="email"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="phone">Celular *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu celular"
              id="phone"
              type='tel'
            />
          </LabelInput>
        </Card>
        <Card>
          <Card.Title>Informações de Entrega</Card.Title>
          <Card.Line />
          <LabelInput>
            <LabelInput.Label htmlFor="address">Endereço *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu endereço"
              id="address"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="district">Bairro *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu bairro"
              id="district"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="city">Cidade *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu Cidade"
              id="city"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="cep">Cep *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira seu bairro"
              id="cep"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="complement">Complemento *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira complemento"
              id="complement"
            />
          </LabelInput>
        </Card>

        <Card>
          <Card.Title>Informações de Pagamento</Card.Title>
          <Card.Line />
          <LabelInput>
            <LabelInput>Forma de Pagamento</LabelInput>
            <div className="flex flex-col gap-5 mt-4">
              <Radio checked onChecked={() => {}} title="Cartão de Crédito" />
              <Radio checked onChecked={() => {}} title="Boleto bancário" />
            </div>
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="nameCard">Nome do Cartão *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira o nome do Cartão"
              id="nameCard"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="numberCard">Data o Número do Cartão *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira o número do Cartão"
              id="numberCard"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="validity">Data de validade do Cartão *</LabelInput.Label>
            <LabelInput.Input
              placeholder="Insira a validade do Cartão"
              id="validity"
            />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label htmlFor="cvv">CVV *</LabelInput.Label>
            <LabelInput.Input
              placeholder="CVV *"
              id="cvv"
            />
          </LabelInput>
        </Card>
        <Card>
          {/* reuso por favor */}
          <Card.Title>RESUMO</Card.Title>
          <Card.Line />
          <div className="flex gap-5">
            <img
              className="object-cover rounded-xs max-h-12 h-full"
              width={70} src="/produc-image-1.jpeg" alt=""
            />
            <strong className="flex-1 text-sm pb-2.5 text-dark_gray">
              Tênis Nike Revolution 6 Next Nature Masculino
            </strong>
          </div>
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

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-dark_gray">Total</h3>
              <span className="text-lg font-bold text-dark_gray">R$ 219,00</span>
            </div>
            <span className="text-xs font-medium text-light_gray text-right">
              ou 10x de R$ 21,90 sem juros
            </span>
          </div>
          <Button bgColor="warning">
            Realizar Pagamento
          </Button>
        </Card>
      </Section>
      <section className="flex flex-col bg-white p-7.5 gap-5 rounded-sm">
        <BuyBox total={219} />

        <Button bgColor="warning">Realizar Pagamento</Button>
      </section>
    </main>
  );
}
 
export default ConfirmadBuy;
