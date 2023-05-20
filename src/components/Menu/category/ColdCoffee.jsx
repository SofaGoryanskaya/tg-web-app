import React from 'react';
import ParentCoffee from "../ParentCoffee";
import "../Menu.css"

const { getDataColdCoffe } = require("../../BD/BD");
const products = getDataColdCoffe();
const ColdCoffee = () => {
    const onClick = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/menu');
    }
    return (
        <div className={"menu"}>
            <button onClick={onClick} className={'btnBack'}>
                <span className={'textBtnBack'}> Назад </span>
            </button>

            <p className={'headerNameApp'}> Холодные напитки </p>
            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ColdCoffee;