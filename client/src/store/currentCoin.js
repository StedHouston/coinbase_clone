const NEW_COIN = 'NEW_COIN';


//Actions
export const SendCoinAction = (id, name, symbol, image) => {
    return {
        type: NEW_COIN,
        id: id,
        name: name,
        symbol: symbol,
        image: image
    }
}

//Reducer
export default function SendCoinReducer(state = {}, action) {
    switch(action.type){
        case 'NEW_COIN':
            return {id: action.id, name: action.name, symbol: action.symbol, image: action.image}
        default:
            return state;
    }
}
