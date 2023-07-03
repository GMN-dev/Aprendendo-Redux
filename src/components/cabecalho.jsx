import { useSelector } from "react-redux"


export default function Cabecalho(){
 let  state  = useSelector((rootReducer) => {return rootReducer.contadorReducer}) 

    console.log(state)

 return(<>
        <h1>{state.currentValue}</h1>
    </>)
}