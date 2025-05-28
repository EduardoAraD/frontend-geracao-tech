import Card from "../components/Card";
import ItemLinePurchase from "../components/ItemLinePurchese";
import Section from "../components/Section";

const Profile = () => {
  return (
    <main>
      <Section bgColor="bg-background">
        <div className="mt-5 mb-10">
          <Card>
            <div className="flex justify-between">
              <h3 className="font-bold text-sm text-dark_gray2">Minhas informações</h3>
              <button className="w-20 flex justify-center items-center cursor-pointer hover:brightness-110 duration-200">
                <span className="font-medium text-primary text-sm underline">Editar</span>
              </button>
            </div>

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
          </Card>
        </div>
      </Section>
    </main>
  );
}
 
export default Profile;