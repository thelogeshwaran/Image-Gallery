import React, { createContext, useContext, useState } from "react";

const PrivacyContext = createContext<any | null>(null);

export const PrivacyProvider: React.FC = ({ children }) => {
  const [privacy, setPrivacy] = useState("public");

  return (
    <PrivacyContext.Provider value={{ privacy, setPrivacy }}>
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  return useContext(PrivacyContext);
}
