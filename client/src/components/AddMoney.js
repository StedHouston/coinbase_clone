import React from 'react';
import 'bulma/css/bulma.css';



function AddMoney(props) {






    return (
        <>
            <div className="AddMoney">
                <span>Add funds to your account </span>
                <span>Available funds: ${}</span>
                <div className="AddMoney__amounts">
                    <button className="button is-info is-rounded">$10</button>
                    <button className="button is-info is-rounded">$100</button>
                    <button className="button is-info is-rounded">$1000</button>
                </div>
            </div>
        </>
    );
}
export default AddMoney;
