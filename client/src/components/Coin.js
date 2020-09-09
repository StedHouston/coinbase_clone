import React from 'react';


function Coin(props) {
    const { name, symbol, image, price, change, marketcap } = props;
    return (
        <>
            <div className="Coin">
                <div className="Coin__identifiers">
                    <div className="Coin__identifiers--number">1</div>
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
                        ${marketcap}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Coin;
