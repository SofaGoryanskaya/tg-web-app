import React from 'react';
import './ProductItem.css';
import Button from "../Button/Button";

 const ProductItem = ({product, className, onAdd, removeProduct}) => {
    const onAddHandler = () => {
        onAdd(product);
    }
    const handleDecrement = () => {
        removeProduct(product);
    }
    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <button className={'count'} disabled> {product.count} </button>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
            <Button className={'remove'} onClick={handleDecrement}>
                Удалить
            </Button>
        </div>
    );
};

export default ProductItem;