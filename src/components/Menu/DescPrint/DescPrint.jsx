import React from 'react';
import "./DescPrint.css";

const DescPrint = ({product, className}) => {
    return (
        <div className={'productDesc'+ className}>
            <div className={'titleDesc'}>{product.title}</div>
            <div > <img src ={product.img} className='imgDesc' /> </div>
            <div className={'kby'}>
                <span> {product.esse} </span>
            </div>
            <div className={'priceDesc'}> <b>Объем:</b> {product.description}</div>
            <div className={'priceDesc'}>
                <span> <b>Стоимость:</b> {product.price}</span>
            </div>
            <div className={'descriptionDesc'}>
                <span> <b>Описание: </b>  <p className="pDesc"> {product.productDesc} </p> </span>
            </div>
        </div>
    );
};

export default DescPrint;