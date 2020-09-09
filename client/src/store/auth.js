import { baseUrl } from '../config';

const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';

//Actions
export const LoggedInAction = () => {
    return {
        type: LOGGED_IN,
        loggedIn: true,
    }
}

export const LoggedOutAction = () => {
    return {
        type: LOGGED_OUT,
        loggedIn: false,
    }
}

//Reducers
export default function LoggedInReducer(state = {}, action) {
    switch(action.type){
        case 'LOGGED_IN':
            return {loggedIn: action.loggedIn};
        case 'LOGGED_OUT':
            return {loggedIn: action.loggedIn}
        default:
            return state;
    }
}

//Sign up
export const signUp = (firstName, lastName, email, password) => async dispatch => {
    try {
      const formData = new FormData();
      formData.append("first_name", firstName)
      formData.append("last_name", lastName)
      formData.append("email", email)
      formData.append("password", password)

      const response = await fetch(`${baseUrl}/api/users/signup`, {
        method: 'post',
        body: formData
      });

      if (!response.ok) {
        throw response
      }
    //   //Place token in Local Storage, update Redux State
      const { access_token, id} = await response.json();
      localStorage.setItem('SESSION_TOKEN', access_token);
      localStorage.setItem('USER_ID', id);
    //   dispatch(LoggedInAction());
    }
    catch (err) {
    //   const errJSON = await err.json()
    //   dispatch(handleAuthErrors(errJSON))
    }
  }