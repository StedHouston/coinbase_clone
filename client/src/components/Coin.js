import React from 'react';
import { useHistory } from 'react-router-dom';


function Coin(props) {
    const { name, number, symbol, image, price, change, marketcap } = props;

    let history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/coinpage/${symbol}`)
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
                        ${price}
                    </div>
                    <div className="Coin__financials--change">
                        {change.toFixed(2)}%
                    </div>
                    <div className="Coin__financials--marketcap">
                        ${marketcap.toLocaleString()}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Coin;
