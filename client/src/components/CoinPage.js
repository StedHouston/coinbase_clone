import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bulma/css/bulma.css'

function CoinPage() {

    const [usd, setUsd] = useState('')
    const [usd_24h_vol, setUsd_24h_vol] = useState('')
    const [usd_24h_change, setUsd_24h_change] = useState('')
    const [usd_market_cap, setUsd_market_cap] = useState('')
    const [chart_data, setChart_data] = useState([])

let { name, symbol } = useParams();

    const data = [
        {
          name: 'Page A', uv: 10100,
        },
        {
          name: 'Page B', uv: 10001,
        },
        {
          name: 'Page C', uv: 12000,
        },
        {
          name: 'Page D', uv: 10900,
        },
        {
          name: 'Page E', uv: 10000,
        },
        {
          name: 'Page F', uv: 10354,
        },
        {
          name: 'Page G', uv: 11000,
        },
      ];

    useEffect(() => {
        async function fetchCoinData(){
            let coin_name = name.toLowerCase()
            let results = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_name}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`)
            let data = await results.json()
            let coin_data = data[coin_name]
            console.log(coin_data)
            let results2 = await fetch(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=20&api_key=533034e0c596e9e29966a48d59566595dc3053fa219ea940a8e244a951936f7a`)
            let past_data = await results2.json()
            console.log(past_data)
            let data_list = past_data.Data.Data
            let array = []
            for(let i = 0; i < data_list.length; i++){
                array.push({'name': data_list[i].time, 'price': data_list[i].open})
            }
            console.log(array)
            setChart_data(array)
            setUsd_market_cap(coin_data.usd_market_cap)
            setUsd_24h_vol(coin_data.usd_24h_vol)
            setUsd_24h_change(coin_data.usd_24h_change)
            setUsd(coin_data.usd)
        }
        fetchCoinData()
    },[])

    console.log(usd_24h_change)
    return (
        <>
            <div className="CoinPageContainer">
                <div className="CoinPageContainer__topheader">
                    <div className="CoinPageContainer__topheader--1">
                        <Link to={'/price'}>Price charts {'>'} </Link>
                    </div>
                    <div className="CoinPageContainer__topheader--2">
                        <Link to={'/price'}>{name} price</Link>
                    </div>
                </div>
                <div className="CoinPageContainer__mainheader">
                    <div className="CoinPageContainer__mainheader--leftside">
                        <img className="CoinPageContainer__mainheader--image" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt=""/>
                        <div className="CoinPageContainer__mainheader--nameprice">
                            {name} price
                        </div>
                        <div className="CoinPageContainer__mainheader--symbol">
                            ({symbol.toUpperCase()})
                        </div>
                    </div>
                    <div className="CoinPageContainer__mainheader--rightside">
                    <button className="button is-link is-outlined">Add to Watchlist</button>
                    </div>
                </div>
                { usd_24h_change ? <div className="CoinPageContainer__CurrentPrice">
                    <span className="CoinPageContainer__CurrentPrice--price">${usd.toLocaleString()}</span> <span>{usd_24h_change.toFixed(2)}%</span>
                </div> : <div>loading...</div>}
                {chart_data ? <LineChart width={768} height={200} data={chart_data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#1552f0" activeDot={{ r: 8 }} />
                </LineChart> : <div>...loading</div>}
                <LineChart width={768} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#1552f0" activeDot={{ r: 8 }} />
                </LineChart>
                <div className="CoinPageContainer__CoinDetails">
                    <div className="CoinPageContainer__CoinDetails--marketcap">
                        <div>Market cap</div>
                        ${usd_market_cap.toLocaleString()}
                    </div>
                    <div className="CoinPageContainer__CoinDetails--volume">
                        <div>Volume (24 hours)</div>
                        ${usd_24h_vol.toLocaleString()}
                    </div>
                    <div className="CoinPageContainer__CoinDetails--circulatingsupply">
                        <div>circulating supply</div>
                        18.5M {symbol.toUpperCase()}
                    </div>
                </div>
            </div>
        </>
    );
}
export default CoinPage;
