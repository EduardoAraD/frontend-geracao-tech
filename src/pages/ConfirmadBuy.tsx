import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";

import type { Purchase, TypePayment } from "../Model/Purchase";
import Button from "../components/Button";
import BuyBox from "../components/BuyBox";
import Card from "../components/Card";
import LabelInput from "../components/LabelInput";
import Radio from "../components/Radio";
import Section from "../components/Section";

import { getFormatMoney } from "../utils/formatMoney";
import { getAddressUserServices } from "../services/address";
import { getPaymentByUserIdServices } from "../services/payment";
import { createPurchaseServices } from "../services/purchase";

const ConfirmadBuy = () => {
  const { items, emptyCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [complement, setComplement] = useState('');
  const [typePayment, setTypePayment] = useState<TypePayment>('card');
  const [nameCard, setNameCard] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [dateValidity, setDateValidity] = useState('');
  const [cvv, setCvv] = useState('');

  const { totalWithDescount } = useMemo(() => {
    const initialValue = 0;

    const totalWithDescount = items.reduce(
      (accumulator, itemCart) => {
        const valueProduct = itemCart.product.price_with_discount * itemCart.quantity

        return accumulator + valueProduct;
      },
      initialValue,
    );

    return {
      totalWithDescount,
    }
  }, [items]);

  const total = useMemo(() => {
    return totalWithDescount;
  }, [totalWithDescount]);

  const loadDataUser = useCallback(async () => {
    if(user !== null) {
      setName(`${user.firstname} ${user.surname}`);
      setEmail(user.email);
      setPhone(user.phone);
      setCpf(user.cpf);

      const responseAddress = await getAddressUserServices({ id: user.id });
      if(responseAddress !== null) {
        setCep(responseAddress.cep);
        setStreet(responseAddress.address);
        setDistrict(responseAddress.district);
        setCep(responseAddress.cep);
        setComplement(responseAddress.complement);
      }
      const responsePayment = await getPaymentByUserIdServices({ id: user.id });
      if(responsePayment !== null) {
        setNumberCard(responsePayment.number);
        setNameCard(responsePayment.name);
        setDateValidity(responsePayment.validate_card);
        setCvv(String(responsePayment.cvv));
      }
    }
  }, [user]);

  async function handleCreatePurchase() {
    // event?.defaultPrevented();

    if(user === null) return;

    const objPurchase: Purchase = {
      user_id: user.id,
      products: items.map(item => ({ product_id: item.product.id, quantity: item.quantity })),
      ref: uuidv4(),
      type_payment: typePayment,
      name_completed: name,
      cpf: cpf.replace(/[^0-9]/g, ""),
      email,
      phone: phone.replace(/[^0-9]/g, ""),
      address: street,
      district,
      city,
      cep: cep.replace(/[^0-9]/g, ""),
      complement,
      name_card: nameCard,
      number_card: numberCard,
      validate_card: dateValidity,
      cvv: Number(cvv),
    }
    await createPurchaseServices(objPurchase);

    emptyCart();
    navigate(`/compra-finalizada/${objPurchase.ref}`);
  }

  useEffect(() => {
    loadDataUser();
  }, [loadDataUser]);

  return (
    <main>
      <form action={handleCreatePurchase}>
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
                name="name"
                autoComplete="name"
                value={name}
                onChangeText={setName}
                required
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="cpf">CPF *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu CPF"
                id="cpf" name="cpf" required
                value={cpf} onChangeText={setCpf}
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="email">E-mail *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu email"
                id="email" name="email"
                type="email" required
                autoComplete='home email'
                value={email} onChangeText={setEmail}
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="phone">Celular *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu celular"
                id="phone" name="phone"
                type='tel'
                autoComplete='tel'
                required
                value={phone} onChangeText={setPhone}
              />
            </LabelInput>
          </Card>
          <Card>
            <Card.Title>Informações de Entrega</Card.Title>
            <Card.Line />
            <LabelInput>
              <LabelInput.Label htmlFor="street">Endereço *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu endereço"
                id="street" name="street"
                autoComplete='street-address'
                required
                value={street} onChangeText={setStreet}
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="district">Bairro *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu bairro"
                id="district" name="district"
                required
                value={district} onChangeText={setDistrict}
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="city">Cidade *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu Cidade"
                id="city" name="city"
                required
                value={city} onChangeText={setCity}
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="cep">Cep *</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira seu Cep"
                id="cep" name="cep"
                type="number"
                required
                value={cep} onChangeText={setCep}
              />
            </LabelInput>
            <LabelInput>
              <LabelInput.Label htmlFor="complement">Complemento</LabelInput.Label>
              <LabelInput.Input
                placeholder="Insira complemento"
                id="complement" name="complement"
                value={complement} onChangeText={setComplement}
              />
            </LabelInput>
          </Card>

          <Card>
            <Card.Title>Informações de Pagamento</Card.Title>
            <Card.Line />
            <LabelInput>
              <LabelInput>Forma de Pagamento</LabelInput>
              <div className="flex flex-col gap-5 mt-4">
                <Radio
                  checked={typePayment === 'card'}
                  onChecked={() => setTypePayment('card')}
                  title="Cartão de Crédito"
                />
                <Radio
                  checked={typePayment === 'billet'}
                  onChecked={() => setTypePayment('billet')}
                  title="Boleto bancário"
                />
              </div>
            </LabelInput>
            {typePayment === 'card' && (
              <>
                <LabelInput>
                  <LabelInput.Label htmlFor="nameCard">Nome do Cartão *</LabelInput.Label>
                  <LabelInput.Input
                    placeholder="Insira o nome do Cartão"
                    id="nameCard" name="nameCard"
                    required={typePayment === 'card'}
                    value={nameCard} onChangeText={setNameCard}
                  />
                </LabelInput>
                <LabelInput>
                  <LabelInput.Label htmlFor="numberCard">Data o Número do Cartão *</LabelInput.Label>
                  <LabelInput.Input
                    placeholder="Insira o número do Cartão"
                    id="numberCard" name="numberCard"
                    required={typePayment === 'card'}
                    value={numberCard} onChangeText={setNumberCard}
                  />
                </LabelInput>
                <LabelInput>
                  <LabelInput.Label htmlFor="validity">Data de validade do Cartão *</LabelInput.Label>
                  <LabelInput.Input
                    placeholder="Insira a validade do Cartão"
                    id="validity" name="validity"
                    required={typePayment === 'card'}
                    value={dateValidity} onChangeText={setDateValidity}
                  />
                </LabelInput>
                <LabelInput>
                  <LabelInput.Label htmlFor="cvv">CVV *</LabelInput.Label>
                  <LabelInput.Input
                    placeholder="CVV *"
                    id="cvv" name="cvv"
                    type="number"
                    required={typePayment === 'card'}
                    value={cvv} onChangeText={setCvv}
                  />
                </LabelInput>
              </>
            )}
          </Card>
          <Card>
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
              <span className="text-sm font-medium text-light_gray">R$ {getFormatMoney(totalWithDescount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-light_gray">Frete:</span>
              <span className="text-sm font-medium text-light_gray">R$ 0,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-light_gray">Desconto:</span>
              <span className="text-sm font-medium text-light_gray">R$ 30,00</span>
            </div>
            <BuyBox total={total} />

            <Button bgColor="warning" type="submit">
              Realizar Pagamento
            </Button>
          </Card>
        </Section>
        <section className="flex flex-col bg-white p-7.5 gap-5 rounded-sm">
          <BuyBox total={total} />

          <Button bgColor="warning" type="submit">Realizar Pagamento</Button>
        </section>
      </form>
    </main>
  );
}
 
export default ConfirmadBuy;
