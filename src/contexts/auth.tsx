import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../Model/User";
import { api } from "../services/api";
import { getUserLocalStorage, removeUserLocalStorage, saveUserLocalStorage } from "../lib/localStorage/user";
import { getTokenLocalStorage, removeTokenLocalStorage, saveTokenLocalStorage } from "../lib/localStorage/token";

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
  const [user, setUser] = useState<User | null>(null);

  function saveUser({ token, user} : { token: string, user: User }) {
    api.defaults.headers.token = `Bearer ${token}`;
    setUser(user);
    saveUserLocalStorage(user);
    saveTokenLocalStorage(token);
  }

  function logout() {
    removeTokenLocalStorage();
    removeUserLocalStorage();
    api.defaults.headers.token = null;
    setUser(null);
  }

  function loadStorage() {
    const user = getUserLocalStorage();
    const token = getTokenLocalStorage();

    setUser(user);
    api.defaults.headers.token = `Bearer ${token}`;
  }

  useEffect(() => {
    loadStorage();
  }, [])

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
