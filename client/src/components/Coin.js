import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SendCoinAction } from '../store/currentCoin';


function Coin(props) {
    const { id, name, number, symbol, image, price, change, marketcap } = props;

    let dispatch = useDispatch();
    let history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(SendCoinAction(id, name, symbol, image))
        history.push(`/coinpage/${name}/${symbol}`)
    }



    return (
        <>
            <div className="Coin" onClick={handleClick}>
                <div className="Coin__identifiers">
                    <div className="Coin__identifiers--number">{number}</div>
                    <img className="Coin__identifiers--image" src={image}/>
                    <div className="Coin__identifiers--name">{name}</div>
                    <div className="Coin__identifiers--symbol">{symbol}</div>
                </div>
                <div className="Coin__financials">
                    <div className="Coin__financials--price">
                        ${price.toLocaleString()}
                    </div>
                    {change > 0 ? <div className="Coin__financials--change" style={{color: 'green'}}>
                                    {change.toFixed(2)}%
                                  </div> : <div className="Coin__financials--change" style={{color: 'red'}}>
                                    {change.toFixed(2)}%
                                  </div>}
                    <div className="Coin__financials--marketcap">
                        ${marketcap.toLocaleString()}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Coin;
