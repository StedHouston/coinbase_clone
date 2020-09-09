import React, { useEffect, useState } from 'react';
import Coin from './Coin';


function PricesPage() {

    const [crypto, setCrypto] = useState('')

    useEffect(() => {
        async function fetchCoins(){
            let results = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            let data = await results.json()
            setCrypto(data)
            console.log(data)
        }
        fetchCoins()
    },[])

    console.log(crypto)
    if(crypto){
        return (
            <>
                <div className="PricesPage__SearchBar">
                    <div>
                        <div>In the last 24 hours</div>
                        <div>Market is up 3.22%</div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Search all assets..."/>
                        </div>
                    </div>
                </div>
                <div className="PricesPage__Results">
                    {crypto.map(ele =>
                        <Coin key={ele.id} image={ele.image} name={ele.name} symbol={ele.symbol} price={ele.current_price} change={ele.price_change_percentage_24h} marketcap={ele.market_cap}  />)}
                </div>
            </>
        );
    }
    return (
        <>
            <div>loading...</div>
        </>
    );
}
export default PricesPage;
