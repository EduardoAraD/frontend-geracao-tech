export interface Address {
  user_id: string;
  address: string;
  district: string;
  city: string;
  cep: string;
  complement: string;
}

export const emptyAddress: Address = {
  user_id: '',
  address: '',
  district: '',
  cep: '',
  city: '',
  complement: '',
}
