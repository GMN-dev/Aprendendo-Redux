import { useDispatch } from "react-redux"


export default function Cabecalho(){
    let dispatch = useDispatch();

    let incrementar = () => {
        dispatch({
            type : 'contador/aumentar'
        })
    }
    let decrementar = () => {
        dispatch({
            type : 'contador/diminuir'
        })
    }
    
    return(<>
        <button onClick={incrementar} className="btn">+</button>
        <button onClick={decrementar} className="btn">-</button>
    </>)
}