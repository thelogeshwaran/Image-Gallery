import { setPriority } from "os";
import React, { createContext, useContext, useState } from "react";

type Props = {
  privacy: string;
  setPrivacy: Function;
};
const PrivacyContext = createContext<Props>({} as Props);

export const PrivacyProvider: React.FC = ({ children }) => {
  const [privacy, setPrivacy] = useState<string>("public");

  return (
    <PrivacyContext.Provider value={{ privacy, setPrivacy }}>
      {children}
    </PrivacyContext.Provider>
  );
};

export function usePrivacy() {
  return useContext(PrivacyContext);
}
