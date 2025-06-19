import type { Address } from "../Model/Address";
import { api } from "./api";

export async function getAddressUserServices({ id }: { id: string }): Promise<Address | null> {
  try {
    const response = await api.get(`/address/user/${id}`);

    const { address } = response.data

    return address;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export async function createAddressServices(data: Address) {
  try {
    const response = await api.post('/address', data);

    return response.data.message;
  } catch (error) {
    console.log(error);

    return "Erro ao cadastrar Endereço"
  }
}