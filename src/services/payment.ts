import type { Payment } from "../Model/Payment";
import { api } from "./api";

export async function getPaymentByUserIdServices({ id }: { id: string }): Promise<Payment | null> {
  try {
    const response = await api.get(`/payment/user/${id}`);

    const { payment } = response.data

    return payment;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export async function createPaymentServices(data: Payment) {
  try {
    const response = await api.post('/payment', data);

    return response.data.message;
  } catch (error) {
    console.log(error);

    return 'Erro ao cadastrar!'
  }
}
