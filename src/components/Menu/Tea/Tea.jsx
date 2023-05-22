import React from 'react';
import {getDataCategory} from "../../BD/BD";
import arrow from "../../BD/Vector.svg";
import ParentCoffee from "../ParentCoffee";
import lastlabel from "../Cold/last.svg";
import tea from "../Tea/tea.svg";

const Tea = () => {
    const { getDataCategory } = require("../../BD/BD");
    const products = getDataCategory("tea");
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
            <img className="categoryDrink" src={tea}/>
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

export default Tea;