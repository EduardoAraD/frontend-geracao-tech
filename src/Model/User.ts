export interface User {
  id: string;
  firstname: string;
  surname: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
}

export const emptyUser: User = {
  id: '',
  firstname: '',
  surname: '',
  email: '',
  password: '',
  cpf: '',
  phone: '',
}
