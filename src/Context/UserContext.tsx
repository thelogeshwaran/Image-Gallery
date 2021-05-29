import React, { createContext, useContext, useState } from "react";

const UserContext = createContext<any | null>(null);

export const UserProvider : React.FC = ({ children })=> {
  const [user, setUser] = useState<any>(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
