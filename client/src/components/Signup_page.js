import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/auth';
import 'bulma/css/bulma.css'

function Signup_page() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signUp(firstName, lastName, email, password))
    }


    return (
        //<>
            <div className="SignupPage">
                <div className="SignupPage__Title">Create your account</div>
                <div className="SignupPage__Form">
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
        //</>
    );
}
export default Signup_page;
