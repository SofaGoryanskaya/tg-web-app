import React from 'react';
import "./ParentCoffee.css";

const ParentCoffee = ({product, className}) => {
    const onClick = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/menu');
    }

    return (
        <div className={'productMenu ' + className}>
            <div className={'imgMenu'}/>
            <div className={'titleMenu'}>{product.title}</div>
            <div className={'descriptionMenu'}>{product.description}</div>
            <div className={'priceMenu'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <div className={'descriptionMenu'}>
                <span>Описание:<p className="esse">{product.esse} </p></span>
            </div>
        </div>
    );
};

export default ParentCoffee;