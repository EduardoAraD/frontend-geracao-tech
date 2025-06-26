import type { Payment } from "../Model/Payment";
import { api } from "./api";

export async function getPaymentByUserIdServices({ id }: { id: string }): Promise<Payment> {
  const response = await api.get(`/payment/user/${id}`);

  const { payment } = response.data

  return payment;
}

export async function createPaymentServices(data: Payment): Promise<string> {
  const response = await api.post('/payment', data);

  return response.data.message;
}
