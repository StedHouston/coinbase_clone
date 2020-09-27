import { baseUrl } from '../config';
import { UpdateFundsAction } from './accountBalance';
import { UpdateErrorsAction } from './errors';
const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';

//Actions
export const LoggedInAction = (first_name) => {
    return {
        type: LOGGED_IN,
        loggedIn: true,
        name: first_name,
    }
}

export const LoggedOutAction = () => {
    return {
        type: LOGGED_OUT,
        loggedIn: false,
        name: '',
    }
}



//Reducers
export default function LoggedInReducer(state = {loggedIn: false, name: ''}, action) {
    switch(action.type){
        case 'LOGGED_IN':
            return {loggedIn: action.loggedIn, name: action.name};
        case 'LOGGED_OUT':
            return {loggedIn: action.loggedIn, name: ''}
        default:
            return state;
    }
}
