import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PortfolioContainer from '../components/PortfolioContainer';
import AddMoney from '../components/AddMoney';
import MiniTransaction from '../components/MiniTransaction';
import { apiUrl, baseUrl } from '../config';

function Dashboard() {

    const [portfolio, setPortfolio] = useState('')
    const [crypto_list, setCryptoList] = useState([])


    useEffect(() => {
        async function fetchPortfolio(){
            let results = await fetch(`${apiUrl}/transactions/get_portfolio`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('SESSION_TOKEN')}`
                },
            });
            let data = await results.json()
            let coins = data.portfolio;
            let coin_list = data.coin_list;
            console.log(coin_list)
            console.log(data)
            let array = []

            for(let key in coins){
                array.push({'id': key, 'name': key, 'amount': coins[key]})
            }
            setPortfolio(array)
            setCryptoList(coin_list)
        }
        fetchPortfolio()
    },[])

    console.log(portfolio)
    return (
        <>
            <Navbar/>
            <div className="Dashboard">
                <div className="Dashboard__Main">
                    <AddMoney/>
                </div>
                <div className="Dashboard__Portfolio">
                    <div className="Dashboard__portfolio--header">Portfolio</div>
                    {portfolio[0] && crypto_list[0] ? portfolio.map(ele =>
                            <MiniTransaction key={ele.id} symbol={ele.name} amount={ele.amount} list={crypto_list}/>) : <div></div>}
                </div>

            </div>
        </>
    );
}
export default Dashboard;
