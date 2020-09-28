import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoggedInAction } from '../store/auth';
import { UpdateFundsAction } from '../store/accountBalance';
import Navbar from '../components/Navbar';
import { baseUrl } from '../config';
import 'bulma/css/bulma.css'

function Signin_page() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {

        try {

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
              const { errors } = await response.json()
              setErrors(errors)
              return;
            }
          //   //Place token in Local Storage, update Redux State
            const { access_token, first_name, account_balance} = await response.json();
            localStorage.setItem('SESSION_TOKEN', access_token);
            dispatch(LoggedInAction(first_name));
            dispatch(UpdateFundsAction(account_balance))
          }
          catch (err) {
            let errors = ['There was an error. Please try again later']
            setErrors(errors)
          }
        history.push('/price')
    }

    const demoLogin = async () => {
      try{
        const response = await fetch(`${baseUrl}/api/users/signin`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'email': 'demoUser@aa.io',
            'password': 'password'
          })
        });

        if (!response.ok) {
          const { errors } = await response.json()
          setErrors(errors)
          return;
        }
        //   //Place token in Local Storage, update Redux State
        const { access_token, first_name, account_balance} = await response.json();
        localStorage.setItem('SESSION_TOKEN', access_token);
        dispatch(LoggedInAction(first_name));
        dispatch(UpdateFundsAction(account_balance))
      }
      catch (err) {
        let errors = ['There was an error. Please try again later']
        setErrors(errors)
      }
  history.push('/price')
    }

    return (
        <>
            <Navbar/>
            <div className="SignupPage">
                <div className="SignupPage__Title">Sign in to Coinbase</div>
                <div className="SigninPage__Form">
                {errors.map(error => <div className="error">{error}</div>)}
                    <div className="field">
                        <div className="control">
                            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <button className="button is-link is-focused" onClick={handleSubmit} >Sign in</button>
                      <button className="button is-link is-focused" onClick={demoLogin} >Demo User</button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Signin_page;
