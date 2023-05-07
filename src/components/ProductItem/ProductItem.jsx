import React from 'react';
import './ProductItem.css';
import Button from "../Button/Button";
const ProductItem = ({product, className, onAdd}) => {
    //типо callback
    const onAddHandler = () => {
        onAdd(product);
    }
    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b><b> ₽</b></span>
            </div>
            <div className={'description'}>{product.description}</div>
            <Button className={'add-btn'} disabled={false} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;