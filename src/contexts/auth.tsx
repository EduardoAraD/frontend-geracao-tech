import { createContext, useState, type ReactNode } from "react";
import type { User } from "../Model/User";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: User | null;
  saveUser: (value: { token: string, user: User }) => void;
  logout: () => void;
}

const UserContext = createContext({} as UserContextProps);

function UserProvider({ children }: UserProviderProps) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<User | null>(null);

  function saveUser({ token, user} : { token: string, user: User }) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(user);
    setToken(token);
  }

  function logout() {
    setUser(null);
    setToken('');
  }

  return (
    <UserContext.Provider
      value={{
        user,
        saveUser,
        logout,
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
