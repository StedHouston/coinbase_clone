import React from 'react';





function CoinbasePerk(props){

    let { image, title, body } = props;

    return (
        <div className="CoinbasePerk">
            <img className="CoinbasePerk__image" src={image} alt=""/>
            <div className="CoinbasePerk__title">{title}</div>
            <div className="CoinbasePerk__body">{body}</div>
        </div>
    )
}

export default CoinbasePerk;
