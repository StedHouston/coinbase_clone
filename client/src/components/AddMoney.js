import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateFundsAction } from '../store/accountBalance';
import { apiUrl } from '../config';
import 'bulma/css/bulma.css';



function AddMoney(props) {

    const account_balance = useSelector(state => state.UpdateFundsReducer.account_balance)
    const dispatch = useDispatch()


    const addFunds = async (e) => {

        let response = await fetch(apiUrl + `/users/add_funds`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('SESSION_TOKEN')}`
            },
            body: JSON.stringify({
                "funds_to_add": e.target.value
            })
        })
        let funds = await response.json()
        dispatch(UpdateFundsAction(funds.account_balance))

    }


    return (
        <>
            <div className="AddMoney">
                <span className="AddMoney__header1">Add funds to your account. </span>
                <div className="AddMoney__amounts">
                    <button className="AddMoney__dashbutton button is-info is-rounded" onClick={addFunds} value={10}>$10</button>
                    <button className="AddMoney__dashbutton button is-info is-rounded" onClick={addFunds} value={100}>$100</button>
                    <button className="AddMoney__dashbutton button is-info is-rounded" onClick={addFunds} value={1000}>$1000</button>
                    <button className="AddMoney__dashbutton button is-info is-rounded" onClick={addFunds} value={10000}>$10000</button>
                    <button className="AddMoney__dashbutton button is-info is-rounded" onClick={addFunds} value={100000}>$100000</button>
                </div>
                <span className="AddMoney__funds">Available funds: ${account_balance.toLocaleString()}</span>
            </div>
        </>
    );
}
export default AddMoney;
