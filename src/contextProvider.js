import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextChoice = ({ user }) => {
  const { Provider } = UserContext;
  const [user, setUser] = useState();
  const [jwt, setJwt] = useState("");

  const value = {
    user,
    setUser,
    jwt,
    setJwt,
  };

  return <Provider value={value}>{user}</Provider>;
};
export default UserContextChoice;
