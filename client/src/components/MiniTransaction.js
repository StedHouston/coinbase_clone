import React from 'react';



function MiniTransaction(props) {
    let {name, symbol, transaction_type, date, usd_amount, crypto_amount, price_per_coin } = props;
    let newDate = []
    let date_array = date.split(' ')
    newDate.push(date_array[2])
    newDate.push(date_array[1] + ',')
    newDate.push(date_array[3])
    let updated_date = newDate.join(' ');


    return (
        <>
            <div className="MiniTransaction__Container">
                <div>
                    <div style={{fontWeight: 'bold'}}>{transaction_type} {name}</div>
                    <div>{updated_date}</div>
                </div>
                <div className="MiniTransaction__Container--rightside">
                    <div style={{fontWeight: 'bold'}}>${usd_amount.toLocaleString()}</div>
                    <div>{crypto_amount} {symbol.toUpperCase()} at ${price_per_coin.toLocaleString()}</div>
                </div>
            </div>
        </>
    );
}
export default MiniTransaction;
