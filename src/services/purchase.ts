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

export async function getPurchasesByUserIdServices({ id }: { id: string }) {
  try {
    const response = await api.get(`/purchase/user/${id}`);

    console.log(response.data);

    return [];
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getPurchaseByRefServices({ ref }: { ref: string }): Promise<PurchaseApi | null> {
  try {
    const response = await api.get(`/purchase/ref/${ref}`);
    console.log(response.data);

    const { purchase } = response.data;

    return purchase;
  } catch (error) {
    console.log(error);

    return null;
  }
}
