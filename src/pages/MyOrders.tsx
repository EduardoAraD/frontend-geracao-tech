import { Fragment, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useUser } from "../hooks/useUser";

import type { PurchaseApi } from "../Model/Purchase";
import Card from "../components/Card";
import CardMyProfile from "../components/CardMyProfile";
import ItemOrder from "../components/ItemOrder";
import Section from "../components/Section";

import { getPurchasesByUserIdServices } from "../services/purchase";
import { AppError } from "../utils/AppError";

const MyOrders = () => {
  const { user } = useUser();

  const [purchases, setPurchases] = useState<PurchaseApi[]>([])

  const loadOrders = useCallback(async () => {
    try {
      if(user !== null) {
        const response = await getPurchasesByUserIdServices({ id: user.id })
        setPurchases(response);
      }
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Erro ao buscar os dados do usuário para o formulário.'
      
      toast.error(title, {
        autoClose: 3000,
        theme: 'colored'
      })
    }
  }, [user]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders])

  return (
    <main>
      <Section bgColor="bg-background">
        <div className="mt-5 mb-10 md:flex md:gap-4">
          <CardMyProfile />
          <Card>
            <Card.Title>Meus Pedidos</Card.Title>
            {purchases.length === 0 && (
              <p className="uppercase font-bold text-light_gray text-lg">Sem Pedidos</p>
            )}
            {purchases.map(purchase => (
              <Fragment key={purchase.id}>
                <Card.Line />
                <ItemOrder
                  products={purchase.products.map(item => ({
                     ref: purchase.ref,
                     id: item.id,
                     name: item.name,
                     image: item.images.length > 0 ? item.images[0] : '/produc-image-1.jpeg'
                  }))}
                  status={purchase.status}
                />
              </Fragment>
            ))}
          </Card>
        </div>        
      </Section>
    </main>
  );
}
 
export default MyOrders;