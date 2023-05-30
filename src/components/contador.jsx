import { useContext } from "react"
import { ContadorContexto } from "../contadorProvider"


export default function Contador(){
    let [contador, setContador] = useContext(ContadorContexto)

    return(
    <>
        <p> {contador} </p>
        <button onClick={() => {setContador( contador + 1)}} >+</button>
        <button onClick={()=>{setContador(contador - 1)}} >-</button>  
    </>)
}