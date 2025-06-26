import type { Purchase, PurchaseApi } from "../Model/Purchase";
import { api } from "./api";

export async function createPurchaseServices(data: Purchase) {
  try {
    const response = await api.post('/purchase', data);

    return response.data.message;
  } catch (error) {
    console.log(error);

    return "Erro ao cadastrar a compra!"
  }
}

export async function getPurchasesByUserIdServices({ id }: { id: string }): Promise<PurchaseApi[]> {
  const response = await api.get(`/purchase/user/${id}`);

  const { purchases } = response.data;

  return purchases;
}

export async function getPurchaseByRefServices({ ref }: { ref: string }): Promise<PurchaseApi> {
 const response = await api.get(`/purchase/ref/${ref}`);

  const { purchase } = response.data;

  return purchase;
}
