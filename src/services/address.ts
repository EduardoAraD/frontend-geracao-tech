import type { Address } from "../Model/Address";
import { api } from "./api";

export async function getAddressUserServices({ id }: { id: string }): Promise<Address | null> {
  const response = await api.get(`/address/user/${id}`);

  const { address } = response.data

  return address;
}

export async function createAddressServices(data: Address) {
  const response = await api.post('/address', data);

  return response.data.message;
}
