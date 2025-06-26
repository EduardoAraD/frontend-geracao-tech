import { jwtDecode } from "jwt-decode";

import type { User } from "../Model/User";
import { api } from "./api";

interface GetLoginUserServicesResponse {
  token: string;
  user: User;
}

export async function getLoginUserServices(objData: { email: string, password: string }): Promise<GetLoginUserServicesResponse> {
  const response = await api.post('/user/token', objData);

  const { token } = response.data;
  if(!token) {
    throw { message: "Erro ao se logar" }
  }

  const { user }: { user: User } = jwtDecode(token);

  return {
    token,
    user
  }
}

interface RegisterProps {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf?: string;
  phone?: string;
}

export async function registerUserServices(objData: RegisterProps) {
  const response = await api.post('/user', objData);

  return response.data.message;
}
