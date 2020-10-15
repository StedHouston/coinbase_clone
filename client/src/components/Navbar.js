import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LoggedOutAction } from '../store/auth';


function Navbar() {
    const loggedIn = useSelector(state => state.LoggedInReducer.loggedIn)
    const first_name = useSelector(state => state.LoggedInReducer.name)
    const history = useHistory()
    const dispatch = useDispatch();

    const signup = () => {
        history.push('/signup')
    }

    const signin = () => {
        history.push('/signin')
    }

    const signout = () => {
        dispatch(LoggedOutAction())
        localStorage.removeItem('SESSION_TOKEN')
        localStorage.removeItem('USER_ID')
    }

    return (
        <>
            <div className="Navbar">
                <Link to={'/'}>
                    <div className="Navbar__logo">Changebase</div>
                </Link>
                <Link to={'/price'}>
                    <div className="Navbar__priceslink">Prices</div>
                </Link>
                {loggedIn ?
                <div className="Navbar__groupedbuttons1">
                    <div className="Navbar__welcome">Welcome, {first_name}</div>
                    <button className="Navbar__signoutbutton" onClick={signout}>Signout</button>
                </div> :
                <p className="Navbar__groupedbuttons2">
                    <button className="Navbar__signinbutton" onClick={signin}>Signin</button>
                    <button className="Navbar__signupbutton" onClick={signup}>Signup</button>
                </p>}
            </div>
        </>
    );
}
export default Navbar;
