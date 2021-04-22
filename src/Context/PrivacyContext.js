import React,{ createContext, useContext, useState } from "react";

const PirvacyContext = createContext();

export function PirvacyProvider ({ children }){
    

    const [ privacy ,setPrivacy ] = useState("public");

    return (
        <PirvacyContext.Provider value={{  privacy , setPrivacy }}>
            { children }
        </PirvacyContext.Provider>
    )
}


export function usePirvacy(){
    return  useContext(PirvacyContext);
}