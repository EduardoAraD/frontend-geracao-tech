export type TypePayment = 'card' | 'billet';
export type TypeStatusPurchase = 'cancel' | 'finish' | 'transit' | 'packed';

export interface Purchase {
  user_id: string;
  products: {
    product_id: number;
    quantity: number;
  }[];
  ref: string;
  type_payment: TypePayment;
  name_completed: string;
  email: string;
  cpf: string;
  phone: string;
  address: string;
  district: string;
  city: string;
  cep: string;
  complement: string;
  name_card: string;
  number_card: string;
  validate_card: string;
  cvv: number;
}

export interface PurchaseApi {
  id: number;
  ref: string;
  status: TypeStatusPurchase;
  type_payment: TypePayment;
  products: {
    id: number;
    name: string;
    slug: string;
    price: number;
    price_with_discount: number;
    images: string[];
    quantity: number;
  }[];
  name_completed: string;
  email: string;
  cpf: string;
  phone: string;
  address: string;
  district: string;
  city: string;
  cep: string;
  name_card: string;
  number_card: string;
}

export const purchaseApiEmpty: PurchaseApi = {
  id: -1,
  ref: '',
  status: 'cancel',
  type_payment: 'billet',
  products: [],
  address: '',
  cep: '',
  city: '',
  district: '',
  name_card: '',
  number_card: '',
  name_completed: '',
  cpf: '',
  email: '',
  phone: '',
} 
