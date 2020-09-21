import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Coin from './Coin';


function PricesPage() {

    const [crypto, setCrypto] = useState('')
    const [market_percentage_change, setMarket_percentage_change] = useState('')

    useEffect(() => {
        async function fetchCoins(){
            let results = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            let data = await results.json()
            setCrypto(data)
            console.log(data)
            let total = 0;
            for(let i = 0; i < data.length; i++){
                total += data[i].price_change_percentage_24h;
            }
            console.log(total)
            console.log((total / data.length).toFixed(2))
            setMarket_percentage_change((total / data.length).toFixed(2))
        }
        fetchCoins()
    },[])

    console.log(crypto)
    let count = 0
    if(crypto){
        return (
            <>
                <Navbar/>
                <div className="PricesPage__SearchBar">
                    <div>
                        <div className="PricesPage__SearchBar--marketheadline1">In the last 24 hours</div>
                        { market_percentage_change >= 0 ?<div className="PricesPage__SearchBar--marketheadline2">Market is up <span style={{color: 'green', fontSize: '20px',fontWeight: 'bolder'}}>{market_percentage_change}%</span></div> :
                        <div className="PricesPage__SearchBar--marketheadline2">Market is down <span style={{color: 'red', fontSize: '20px', fontWeight: '800'}}>{market_percentage_change}%</span></div>}
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Search all assets..."/>
                        </div>
                    </div>
                </div>
                <div className="PricesPage__Results">
                    <div className="PricesPage__Results--Header">
                        <div className="PricesPage__Results--Header-Container">
                            <div className="PricePage__Results--Header-numbersign">
                                #
                            </div>
                            <div className="PricePage__Results--Header-Name">
                                Name
                            </div>
                        </div>
                        <div className="PricePage__Results--Header-Container2">
                            <div className="PricePage__Results--Header-Price">
                                Price
                            </div>
                            <div className="PricePage__Results--Header-Change">
                                Change
                            </div>
                            <div className="PricePage__Results--Header-Marketcap">
                                Market Cap
                            </div>
                        </div>
                    </div>
                    {crypto.map(ele =>
                        <Coin key={ele.id} id={ele.id} number={count += 1} image={ele.image} name={ele.name} symbol={ele.symbol} price={ele.current_price} change={ele.price_change_percentage_24h} marketcap={ele.market_cap} circulatingSupply={ele.circulating_supply}  />)}
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
