import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bulma/css/bulma.css'

function Signup_page() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    async function handleSubmit(){

    }


    return (
        <>
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
                            <input className="input" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup_page;
