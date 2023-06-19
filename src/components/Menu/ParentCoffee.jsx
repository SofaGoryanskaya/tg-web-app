import React from 'react';
import "./ParentCoffee.css";
import Description from "./Description";


const ParentCoffee = ({product, className, funcloaction}) => {
    const onClick = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/menu');
    }
    const funcloactionChild = () => {
        funcloaction(product);
    }


    return (
        <div className={'productMenu ' + className}>
            <div > <img src ={product.img} className='imgMenu' onClick={funcloactionChild} /> </div>
            <div className={'titleMenu'}>{product.title}</div>
            <div className={'descriptionMenu'}>{product.description}</div>
            <div className={'priceMenu'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <div className={'descriptionMenu'}>
                <span>Описание: {product.esse} </span>
            </div>
        </div>
    );
};

export default ParentCoffee;