import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/auth';
import Navbar from '../components/Navbar';
import 'bulma/css/bulma.css'

function Signin_page() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signIn(email, password))
        history.push('/price')
    }


    return (
        <>
            <Navbar/>
            <div className="SignupPage">
                <div className="SignupPage__Title">Sign in to Coinbase</div>
                <div className="SigninPage__Form">
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
                    <button className="button is-link is-focused" onClick={handleSubmit} >Sign in</button>
                </div>
            </div>
        </>
    );
}
export default Signin_page;
