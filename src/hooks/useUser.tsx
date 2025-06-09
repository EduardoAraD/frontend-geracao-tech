import { useContext } from "react";

import { UserContext } from "../contexts/auth";

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
