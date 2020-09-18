import { baseUrl } from '../config';

const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';

//Actions
export const LoggedInAction = (first_name) => {
    return {
        type: LOGGED_IN,
        loggedIn: true,
        name: first_name
    }
}

export const LoggedOutAction = () => {
    return {
        type: LOGGED_OUT,
        loggedIn: false,
        name: ''
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
      const { access_token, id, first_name} = await response.json();
      localStorage.setItem('SESSION_TOKEN', access_token);
      localStorage.setItem('USER_ID', id);
      dispatch(LoggedInAction(first_name));
    }
    catch (err) {
    //   const errJSON = await err.json()
    //   dispatch(handleAuthErrors(errJSON))
    }
  }

  export const signIn = (email, password) => async dispatch => {
    try {
      // const formData = new FormData();
      // formData.append("email", email)
      // formData.append("password", password)

      const response = await fetch(`${baseUrl}/api/users/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      });

      if (!response.ok) {
        throw response
      }
    //   //Place token in Local Storage, update Redux State
      const { access_token, id, first_name} = await response.json();
      localStorage.setItem('SESSION_TOKEN', access_token);
      localStorage.setItem('USER_ID', id);
      dispatch(LoggedInAction(first_name));
    }
    catch (err) {
    //   const errJSON = await err.json()
    //   dispatch(handleAuthErrors(errJSON))
    }
  }
