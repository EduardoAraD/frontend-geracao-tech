import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useUser } from "../hooks/useUser";

import { emptyAddress, type Address } from "../Model/Address";
import Card from "../components/Card";
import CardMyProfile from "../components/CardMyProfile";
import ItemLinePurchase from "../components/ItemLinePurchese";
import Section from "../components/Section";

import { getAddressUserServices } from "../services/address";
import { AppError } from "../utils/AppError";

const Profile = () => {
  const { user } = useUser();
  
  const [address, setAddress] = useState<Address>(emptyAddress);

  const loadingData = useCallback(async () => {
    try {
      if(user !== null) {
        const response = await getAddressUserServices({ id: user.id });
        if(response !== null) {
          setAddress(response);
        }
      }
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Erro ao buscar os dados do usuário.'
      
      toast.error(title, {
        autoClose: 3000,
        theme: 'colored'
      });
    }
  }, [user]);

  useEffect(() => {
    loadingData()
  }, [loadingData])

  return (
    <main>
      <Section bgColor="bg-background">
        <div className="mt-5 mb-10 md:flex md:gap-4">
          <CardMyProfile />
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
              <ItemLinePurchase title='Nome' value={`${user?.firstname} ${user?.surname}`} />
              <ItemLinePurchase title='CPF' value={user?.cpf || ''} />
              <ItemLinePurchase title='E-mail' value={user?.email || ''} />
              <ItemLinePurchase title='Celular' value={user?.phone || ''} />
            </div>
            <Card.Line />
            <div className="flex flex-col gap-2.5">
              <Card.Title size="base">
                Informações de Entrega
              </Card.Title>
              <ItemLinePurchase title='Endereço' value={address.address} />
              <ItemLinePurchase title='Bairro' value={address.district} />
              <ItemLinePurchase title='Cidade' value={address.city} />
              <ItemLinePurchase title='CEP' value={address.cep} />
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
 
export default Profile;
