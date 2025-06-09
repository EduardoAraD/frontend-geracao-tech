import { jwtDecode } from "jwt-decode";

import type { User } from "../Model/User";
import { api } from "./api";

export async function getLoginUserServices(objData: { email: string, password: string }) {
  try {
    const response = await api.post('/user/token', objData);

    const { token } = response.data;
    if(!token) {
      return null;
    }

    const { user }: { user: User } = jwtDecode(token);

    return {
      token,
      user
    }
  } catch (error) {
    console.log(error);
    return null;
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
  try {
    const response = await api.post('/user', objData);

    return response.data.message;
  } catch (error) {
    console.log(error);
    return null;
  }
}
