import React from 'react';
import ParentCoffee from "../ParentCoffee";
import "../Menu.css";
import coldcoffee from "./coldcof.svg";
import arrow from "../../BD/Vector.svg";
import lastlabel from "./last.svg";
import {getDataCategory} from "../../BD/BD";


const ColdCoffee = () => {

    const { getDataCategory } = require("../../BD/BD");
    const products = getDataCategory("cold");
    const onBack = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/menu');
    }
    const replaceOrder = () => {
        window.location.assign(' https://tg-bot-2-a0669.web.app/checkF');
    }
    return (
        <div className="menu">
            <div className="orderLast" onClick={replaceOrder} > 🛒  </div>
            <img className="arrowCateg" src={arrow} onClick={onBack}/>
            <img className="categoryDrink" src={coldcoffee}/>
            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'itemMenu'}
                />
            ))}
            <img className="categoryDrink" src={lastlabel}/>
        </div>
    );
};

export default ColdCoffee;