import React from 'react';
import { SendCoinAction } from '../store/currentCoin';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MiniTransaction(props) {
    let { symbol, amount, list } = props;

    let dispatch = useDispatch()
    let history = useHistory()
    let name = '';
    let image = '';
    let id = '';
    let circulatingSupply = 18243829


    for(let i = 0; i < list.length; i++){
        if(list[i].symbol === symbol){
            name = list[i].name
            image = list[i].image_url
            id = name.toLowerCase()
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(SendCoinAction(id, name, symbol, image, circulatingSupply))
        history.push(`/coinpage/${name}/${symbol}`)
    }

    return (
        <>
             <div className="MiniTransaction__Container" onClick={handleClick}>
                    <div>
                        <div style={{fontWeight: 'bold'}}>{name}</div>
                    </div>
                    <div className="MiniTransaction__Container--rightside">
                        <div style={{fontWeight: 'bold'}}>{symbol.toUpperCase()} {amount}</div>
                    </div>
             </div>
        </>
    );
}
export default MiniTransaction;
