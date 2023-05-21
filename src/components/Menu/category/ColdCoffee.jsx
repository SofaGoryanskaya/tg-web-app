import React from 'react';
import PattertCategory from "./PattertCategory";
import ParentCoffee from "../ParentCoffee";
import "../Menu.css";
import photoLabel from "../../Form/Takeaway coffee.svg";

const { getDataColdCoffe } = require("../../BD/BD");
const products = getDataColdCoffe();
const ColdCoffee = () => {

    return (
        <div className="menu">
            <PattertCategory
                titleProduct = {'Холодные напитки'}
            />

            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'item'}
                />
            ))}


            <img className={"photo"} src={photoLabel}/>
        </div>
    );
};

export default ColdCoffee;