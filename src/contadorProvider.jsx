import { useState, createContext } from "react";

export let ContadorContexto = createContext();

export function ContadorProvider(props){
    let [contador, setContador] = useState(0)
    
    return(
    <>    
        <ContadorContexto.Provider value={[contador, setContador]}>
            {props.children}
        </ContadorContexto.Provider>
    </>)
}

