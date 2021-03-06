import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiUrl, baseUrl, api_key } from '../config';
import Navbar from '../components/Navbar';
import LineChart from '../components/LineChart';
import Transaction from '../components/Transaction';
import { UpdateFundsAction } from '../store/accountBalance';
import { BeatLoader } from 'react-spinners';
import 'bulma/css/bulma.css'


function CoinPage() {

    const [usd, setUsd] = useState('')
    const [usd_24h_vol, setUsd_24h_vol] = useState('')
    const [usd_24h_change, setUsd_24h_change] = useState('')
    const [usd_market_cap, setUsd_market_cap] = useState('')
    const [chart_data, setChart_data] = useState([])
    const [toggle, setToggle] = useState(true)
    const [user_amount, setUser_amount] = useState('')
    const [cost, setCost] = useState(0)
    const [availableCrypto, setAvailableCrypto] = useState('')
    const [history, setHistory] = useState([])
    const [prices, setPrices] = useState()
    const [times, setTimes] = useState()
    const [errors, setErrors] = useState([''])

    const loggedIn = useSelector(state => state.LoggedInReducer.loggedIn)
    const account_balance = useSelector(state => state.UpdateFundsReducer.account_balance)
    const coin_info = useSelector(state => state.SendCoinReducer)

    let { name, symbol } = useParams();
    let historyHook = useHistory()
    let dispatch = useDispatch()


    useEffect(() => {
        async function fetchCoinData(){

            let results = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_info.id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`)
            let data = await results.json()
            let coin_data = data[coin_info.id]


            let results2 = await fetch(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin_info.symbol}&tsym=USD&limit=20&api_key=${api_key}`)
            let past_data = await results2.json()

            let data_list = past_data.Data.Data
            let prices = []
            let times = []
            for(let i = 0; i < data_list.length; i++){
                prices.push(data_list[i].open)
                times.push(data_list[i].time)
            }

            if (loggedIn){
                let results3 = await fetch(`${apiUrl}/transactions/get_all/${symbol}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('SESSION_TOKEN')}`
                    },
                });
                let transaction_history = await results3.json()
                setHistory(Object.values(transaction_history).reverse())
            }

            let result4 = await fetch(`${apiUrl}/coins/${symbol}`)
            let coin = await result4.json()

            let result5 = await fetch(`${apiUrl}/transactions/get_amount/${symbol}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('SESSION_TOKEN')}`
                },
            });
            let crypto_available = await result5.json()
            setAvailableCrypto(crypto_available.crypto_amount)
            setUsd_market_cap(coin_data.usd_market_cap)
            setUsd_24h_vol(coin_data.usd_24h_vol)
            setUsd_24h_change(coin_data.usd_24h_change)
            setUsd(coin_data.usd.toFixed(2))
            setPrices(prices)
            setTimes(times)
        }
        fetchCoinData()
    },[])


    const buyTab = (e) => {
        e.preventDefault();
        e.target.classList.add('active')
        let tab = document.getElementsByClassName("sell_tab")
        tab[0].classList.remove('active')
        setToggle(true)

    }

    const sellTab = (e) => {
        e.preventDefault();
        e.target.classList.add('active')
        let tab = document.getElementsByClassName("buy_tab")
        tab[0].classList.remove('active')
        setToggle(false)
    }

    const calculate_cost = (e) => {
        if(e.target.value == '.'){
            setUser_amount(e.target.value)
            setCost(0)
            return
        }

        if(isNaN(e.target.value)){
            setUser_amount('')
            setCost(0)
            return
        }

        setUser_amount(e.target.value)
        let total_cost = e.target.value * usd
        let rounded_cost = Math.round((total_cost + Number.EPSILON) * 100) / 100
        setCost(rounded_cost)

    }

    const makePurchase = async () => {
        let response = await fetch(apiUrl + `/transactions/buy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('SESSION_TOKEN')}`
            },
            body: JSON.stringify({
                "transaction_type": 'buy',
                "usd_amount": usd,
                "crypto_amount":  user_amount,
                'symbol': symbol

            })
        })

        if(!response.ok){
            let {error, msg } = await response.json()
            if(msg){
                setErrors(['Please signin to purchase'])
                return;
            }
            setErrors([error])
            return;

        }
        let funds = await response.json()
        dispatch(UpdateFundsAction(funds.account_balance))
        historyHook.push(`/`)
    }

    const makeSell = async () => {
        let response = await fetch(apiUrl + `/transactions/sell`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('SESSION_TOKEN')}`
            },
            body: JSON.stringify({
                "usd_amount": usd,
                "crypto_amount":  user_amount,
                'symbol': symbol
            })
        })

        if(!response.ok){
            let {error, msg } = await response.json()
            if(msg){
                setErrors(['Please signin to sell'])
                return;
            }
            setErrors([error])
            return;
        }

        let funds = await response.json()


        dispatch(UpdateFundsAction(funds.account_balance))
        historyHook.push(`/`)
    }
    if(prices && times){
        return (
            <>
                <Navbar/>
                <div className="CoinPageContainer1">
                    <div className="CoinPageContainer">
                        <div className="CoinPageContainer__topheader">
                            <div className="CoinPageContainer__topheader--1">
                                <Link to={'/price'}>Price charts {'>'} </Link>
                            </div>
                            <div className="CoinPageContainer__topheader--2">
                                <Link to={`/coinpage/${name}/${symbol}`}> {name} price</Link>
                            </div>
                        </div>
                        <div className="CoinPageContainer__mainheader">
                            <div className="CoinPageContainer__mainheader--leftside">
                                <img className="CoinPageContainer__mainheader--image" src={coin_info.image} alt=""/>
                                <div className="CoinPageContainer__mainheader--nameprice">
                                    {name} price
                                </div>
                                <div className="CoinPageContainer__mainheader--symbol">
                                    ({symbol.toUpperCase()})
                                </div>
                            </div>
                        </div>
                        { usd_24h_change && usd_24h_change < 0 ? <div className="CoinPageContainer__CurrentPrice">
                                <span className="CoinPageContainer__CurrentPrice--price">${usd.toLocaleString()}</span> <span style={{color: 'red'}}>{usd_24h_change.toFixed(2)}%</span>
                            </div> : <div></div>}
                        { usd_24h_change && usd_24h_change > 0 ? <div className="CoinPageContainer__CurrentPrice">
                                <span className="CoinPageContainer__CurrentPrice--price">${usd.toLocaleString()}</span> <span style={{color: 'green'}}>+{usd_24h_change.toFixed(2)}%</span>
                            </div> : <div></div>}
                        <div className="CoinPageContainer__graph">
                            <LineChart prices={prices} times={times}/>
                            <div className="CoinPage__transactions">
                                <div className="CoinPage__transactiontabs">
                                    <span className="buy_tab active" onClick={buyTab}>Buy</span>
                                    <span className="sell_tab" onClick={sellTab}>Sell</span>
                                </div>
                                {toggle ? <div>
                                    <div className="CoinPage__transactions--usd">
                                        <span style={{padding: "10px"}}>{symbol.toUpperCase()}</span>
                                        <div style={{padding: "10px"}}>
                                            <input className="small-input" value={user_amount} onChange={calculate_cost}></input>
                                        </div>
                                    </div>
                                    <div className="CoinPage__transactions--cost">
                                        <span>Estimated Cost: </span>
                                        <span>{cost.toLocaleString()}</span>
                                    </div>
                                    <div className="CoinPage__transactions--orderbutton">
                                        <button className="button is-link" onClick={makePurchase}>Complete Order</button>
                                    </div>
                                    <div className="CoinPage__transactions--coinsavailable">
                                        <span style={{fontWeight: '600'}}>Current funds: </span> ${account_balance}
                                    </div>
                                {errors.map(error => <div className="error" key={error}>{error}</div>)}
                                </div> : <div>
                                    <div className="CoinPage__transactions--usd">
                                        <span style={{padding: "10px"}}>{symbol.toUpperCase()}</span>
                                        <div style={{padding: "10px"}}>
                                            <input className="small-input" value={user_amount} onChange={calculate_cost}></input>
                                        </div>
                                    </div>
                                    <div className="CoinPage__transactions--cost">
                                        <span>Estimated Credit: </span>
                                        <span>{cost.toLocaleString()}</span>
                                    </div>
                                    <div className="CoinPage__transactions--orderbutton">
                                        <button className="button is-link" onClick={makeSell}>Complete Order</button>
                                    </div>
                                    <div className="CoinPage__transactions--coinsavailable">
                                        <span style={{fontWeight: '600', padding:'10px'}}>{availableCrypto} {symbol.toUpperCase()} available </span>
                                    </div>
                                    {errors.map(error => <div className="error" key={error}>{error}</div>)}
                            </div>}
                    </div>
                        </div>
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
                                <div>Circulating supply</div>
                                {coin_info.circulatingSupply.toLocaleString()} {symbol.toUpperCase()}
                            </div>
                        </div>
                        <div className="CoinPageContainer__History__Title">Transaction History</div>
                        {history ? <div className="CoinPageContainer__History__Data">{history.map(ele =>
                                <Transaction key={ele.id} name={name} symbol={symbol} transaction_type={ele.transaction_type} date={ele.date} usd_amount={ele.usd_amount} crypto_amount={ele.crypto_amount} price_per_coin={ele.price_per_coin}/>)}
                                </div> : <div>No purchases have been made</div>}

                    </div>
                </div>
            </>
        );
    }
    return (
        <div style={{position: 'fixed', top: '50%', left: '50%'}}>
            <BeatLoader color="rgb(21,82,240)"/>
        </div>

    );
}
export default CoinPage;
