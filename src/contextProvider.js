import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const { Provider } = UserContext;
  const [users, setUsers] = useState();
  const [jwt, setJwt] = useState("");

  const value = {
    users,
    setUsers,
    jwt,
    setJwt,
  };

  return <Provider value={value}>{children}</Provider>;
};
export default UserContextProvider;
