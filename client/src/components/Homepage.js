import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import CoinbasePerk from '../components/CoinbasePerk';
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
                    <div style={{ marginTop: '75px', marginLeft: '60px', marginRight: '60px', alignSelf: 'center' }}>
                        <div className="Homepage__maincontent--header1">Buy and sell cryptocurrency</div>
                        <div className="Homepage__maincontent--header2">Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</div>
                    </div>
                    <div className="HomePage__maincontent--perks">
                        <CoinbasePerk image={'/images/coinbase_vault.png'} title={'Secure storage'} body={'We store the vast majority of the digital assets in secure offline storage.'}/>
                        <CoinbasePerk image={'/images/coinbase_insurance.png'} title={'Protected by insurance'} body={'Cryptocurrency stored on our servers is covered by our insurance policy.'}/>
                        <CoinbasePerk image={'/images/coinbase_shield.png'} title={'Industry best Practices'}n body={'Coinbase supports a variety of the most popular digital currencies.'}/>
                    </div>

                </div>
                <img className="Homepage__maincontent--image" src="/images/phone_pic.jpg" alt=""/>

            </div>
        </>
        );
}

export default Homepage;
