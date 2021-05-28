import React, { createContext, useContext, useState } from "react";

const PrivacyContext = createContext();

export function PrivacyProvider({ children }) {
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
