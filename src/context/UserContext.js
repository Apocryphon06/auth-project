import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [path, setPath] = useState('login');
  return (
    <UserContext.Provider value={[path, setPath]}>
      {props.children}
    </UserContext.Provider>
  );
};
