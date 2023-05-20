import React from 'react';
import "./ParentCoffee.css";

const ParentCoffee = ({product, className}) => {
    return (
        <div className={'productMenu ' + className}>
            <div className={'imgMenu'}/>
            <div className={'titleMenu'}>{product.title}</div>
            <div className={'descriptionMenu'}>{product.description}</div>
            <div className={'priceMenu'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
        </div>
    );
};

export default ParentCoffee;