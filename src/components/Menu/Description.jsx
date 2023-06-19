import React from 'react';
import arrow from "../BD/Vector.svg";
import DescPrint from "./DescPrint/DescPrint";
import "./DescPrint/DescPrint.css";


const { getData } = require("../BD/BD");
const product = getData();
const order = JSON.parse(window.sessionStorage.getItem('orderClick'))
const Description = () => {
    const onClickBack = () => {
        window.location.assign(' https://tg-bot-2-a0669.web.app/menu');
    }
    return (
        <div className="menu">
            <img className="arrowMenu" src={arrow} onClick={onClickBack}/>

            {order.map(item => (
                <DescPrint
                    product={item}
                    className={'itemMenu'}
                />
            ))}
        </div>
    );
};

export default Description;