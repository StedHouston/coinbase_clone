const UPDATE_FUNDS = 'UPDATE_FUNDS';



//Actions
export const UpdateFundsAction = (account_balance) => {
    return {
        type: UPDATE_FUNDS,
        account_balance: account_balance
    }
}


//Reducers
export default function UpdateFundsReducer(state = {account_balance: 0}, action) {
    switch(action.type){
        case 'UPDATE_FUNDS':
            return {account_balance: action.account_balance}
        default:
            return state;
    }
}
