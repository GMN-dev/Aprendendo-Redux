import { combineReducers } from "redux"
import contadorReducer from './contador/reducer'

let rootReducer = combineReducers(
    {contadorReducer} 
)

export default rootReducer;