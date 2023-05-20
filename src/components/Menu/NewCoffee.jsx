import React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import ParentCoffee from "./ParentCoffee";

const { getData } = require("../BD/BD");
const products = getData();
const NewCoffee = () => {
    return (
        <div>
            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'item'}
                />

            ))}
        </div>
    );
};

export default NewCoffee;