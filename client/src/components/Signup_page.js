import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoggedInAction } from '../store/auth';
import { UpdateFundsAction } from '../store/accountBalance';
import Navbar from '../components/Navbar';
import { baseUrl } from '../config';
import 'bulma/css/bulma.css'

function Signup_page() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {

        try {
            const formData = new FormData();
            formData.append("first_name", firstName)
            formData.append("last_name", lastName)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("confirmPassword", confirmPassword)

            const response = await fetch(`${baseUrl}/api/users/signup`, {
              method: 'post',
              body: formData
            });

            if (!response.ok) {
                let { errors } = await response.json()
                setErrors(errors)
                return;
            }
            //Place token in Local Storage, update Redux State
            const { access_token, id, first_name, account_balance} = await response.json();
            localStorage.setItem('SESSION_TOKEN', access_token);
            localStorage.setItem('USER_ID', id);
            dispatch(LoggedInAction(first_name));
            dispatch(UpdateFundsAction(account_balance))
            history.push('/price')
          }
          catch (err) {
            let errors = ['There was an error. Please try again later']
            setErrors(errors)
          }

    }


    return (
        <>
            <Navbar/>
            <div className="SignupPage">
                <div className="SignupPage__Title">Create your account</div>
                <div className="SignupPage__Form">
                    {errors.map(error => <div style={{color: 'red', fontWeight: 'bolder'}}>{error}</div>)}
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name"/>
                        </div>
                    </div>
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
                    <div className="field">
                        <div className="control">
                            <input className="input" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password"/>
                        </div>
                    </div>
                    <button className="button is-link is-focused" onClick={handleSubmit} >Signup</button>
                </div>
            </div>
        </>
    );
}
export default Signup_page;
