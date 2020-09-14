import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { apiUrl } from '../config';


function Homepage (props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {

    }, []);


    return (
        <>
            <Navbar/>
            <div className="Homepage__maincontent">
                <div className="Homepage__maincontent--header">
                    <div className="Homepage__maincontent--header1">Buy and sell cryptocurrency</div>
                    <div className="Homepage__maincontent--header2">Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</div>
                </div>
                <img className="Homepage__maincontent--image" src="/images/phone_pic.jpg" alt=""/>

            </div>
        </>
        );
}

export default Homepage;
