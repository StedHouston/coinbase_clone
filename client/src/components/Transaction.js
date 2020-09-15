import React from 'react';



function Transaction(props) {
    let {name, date, usd_amount, crypto_amount, price_per_coin } = props;
    let newDate = []
    let date_array = date.split(' ')
    newDate.push(date_array[2])
    newDate.push(date_array[1] + ',')
    newDate.push(date_array[3])
    let updated_date = newDate.join(' ');


    return (
        <>
            <div className="Transaction__Container">
                <div>
                    <div>Bought {name}</div>
                    <div>{updated_date}</div>
                </div>
                <div>
                    <div>${usd_amount}</div>
                    <div>{crypto_amount} BTC at ${price_per_coin}</div>
                </div>
            </div>
        </>
    );
}
export default Transaction;
