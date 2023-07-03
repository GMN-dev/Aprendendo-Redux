let initialState = {
    currentValue : 0 
}

function contadorReducer(state = initialState, action){
    switch(action.type){
        case 'contador/aumentar':
            return { ...state, currentValue : state.currentValue += 1};
        case 'contador/diminuir':
            return { ...state, currentValue : state.currentValue -= 1};
    }
    return state
}

export default contadorReducer;