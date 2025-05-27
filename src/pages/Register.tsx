import Button from "../components/Button";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import LabelInput from "../components/LabelInput";
import Section from "../components/Section";

const Register = () => {
  return (
    <main>
      <Section bgColor="bg-background">
        <h2 className="text-[1.375rem] font-bold text-dark_gray mt-5 mb-2.5 text-center">Criar Conta</h2>
        <Card>
          <Card.Title>Informações Pessoais</Card.Title>
          <Card.Line />
          <LabelInput>
            <LabelInput.Label>Nome Completo *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu nome" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>CPF *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu CPF" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>E-mail *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu email" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>Celular *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu celular" />
          </LabelInput>
        </Card>
        <Card>
          <Card.Title>Informações de Entrega</Card.Title>
          <Card.Line />
          <LabelInput>
            <LabelInput.Label>Endereço *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu endereço" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>Bairro *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu bairro" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>Cidade *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira sua cidade" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>CEP *</LabelInput.Label>
            <LabelInput.Input placeholder="Insira seu CEP" />
          </LabelInput>
          <LabelInput>
            <LabelInput.Label>Complemento</LabelInput.Label>
            <LabelInput.Input placeholder="Insira complemento" />
          </LabelInput>
        </Card>
        <Checkbox
          classname="text-left items-start mt-5 mb-7.5"
          checked
          onChecked={() => {}}
          title="Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode varias de acordo com a interação do cliente."
        />
        <Button className="mb-10">Criar Conta</Button>
      </Section>
    </main>
  );
}
 
export default Register;