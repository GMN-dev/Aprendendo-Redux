import { useContext } from "react"
import { ContadorContexto } from "../contadorProvider"

export default function Cabecalho(){
    let [contador, setContador] = useContext(ContadorContexto)
    
    return(
        <>
         <h1>{contador}</h1>
        </>
    )
}