import React from 'react';
import PattertCategory from "./PattertCategory";
import ParentCoffee from "../ParentCoffee";
import "../Menu.css";
import photoLabel from "../../Form/Takeaway coffee.svg";
import coldcoffee from "./coldcof.svg";
import arrow from "../../BD/Vector.svg";
import lastlabel from "./last.svg";

const { getDataColdCoffe } = require("../../BD/BD");
const products = getDataColdCoffe();
const ColdCoffee = () => {
    const onBack = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/menu');
    }
    return (
        <div className="menu">
            <img className="categoryDrink" src={coldcoffee}/>

            <img className="arrowCateg" src={arrow} onClick={onBack}/>

            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'item'}
                />
            ))}

            <img className="categoryDrink" src={lastlabel}/>
            {/*<img className={"photo"} src={photoLabel}/>*/}
        </div>
    );
};

export default ColdCoffee;