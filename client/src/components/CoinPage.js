import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bulma/css/bulma.css'

function CoinPage() {

    const [usd, setUsd] = useState('')
    const [usd_24_vol, setUsd_24_vol] = useState('')
    const [usd_market_cap, setUsd_market_cap] = useState('')

    const data = [
        {
          name: 'Page A', Time: 2400,
        },
        {
          name: 'Page B', Time: 1398,
        },
        {
          name: 'Page C', Time: 12000,
        },
        {
          name: 'Page D', Time: 3908,
        },
        {
          name: 'Page E', Time: 4800,
        },
        {
          name: 'Page F', Time: 3800,
        },
        {
          name: 'Page G', Time: 4300,
        },
      ];

    useEffect(() => {
        async function fetchCoinData(){
            let results = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`)
            let data = await results.json()
            console.log(data.bitcoin)
            setUsd_market_cap(data.bitcoin.usd_market_cap)
        }
        fetchCoinData()
    },[])



    return (
        <>
            <div className="CoinPageContainer">
                <div className="CoinPageContainer__topheader">
                    <div className="CoinPageContainer__topheader--1">
                        <Link to={'/price'}>Price charts {'>'} </Link>
                    </div>
                    <div className="CoinPageContainer__topheader--2">
                        <Link to={'/price'}>Bitcoin price</Link>
                    </div>
                </div>
                <div className="CoinPageContainer__mainheader">
                    <div className="CoinPageContainer__mainheader--leftside">
                        <img className="CoinPageContainer__mainheader--image" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt=""/>
                        <div className="CoinPageContainer__mainheader--nameprice">
                            Bitcoin price
                        </div>
                        <div className="CoinPageContainer__mainheader--symbol">
                            (BTC)
                        </div>
                    </div>
                    <div className="CoinPageContainer__mainheader--rightside">
                    <button className="button is-link is-outlined">Add to Watchlist</button>
                    </div>
                </div>
                <LineChart width={768} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Time" stroke="#1552f0" activeDot={{ r: 8 }} />
                </LineChart>
                <div className="CoinPageContainer__CoinDetails">
                    <div className="CoinPageContainer__CoinDetails--marketcap">
                        <div>Market cap</div>
                        ${usd_market_cap.toLocaleString()}
                    </div>
                    <div className="CoinPageContainer__CoinDetails--volume">
                        <div>Volume (24 hours)</div>
                        $41.7B
                    </div>
                    <div className="CoinPageContainer__CoinDetails--circulatingsupply">
                        <div>circulating supply</div>
                        18.5M BTC
                    </div>
                </div>
            </div>
        </>
    );
}
export default CoinPage;
