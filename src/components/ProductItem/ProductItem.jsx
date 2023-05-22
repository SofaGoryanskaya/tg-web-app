import React from 'react';
import './ProductItem.css';
import Button from "../Button/Button";
import photoLabelOreder from "../Profile/Frame 36.svg";

 const ProductItem = ({product, className, onAdd, removeProduct}) => {
    const onAddHandler = () => {
        onAdd(product);
    }
    const handleDecrement = () => {
        removeProduct(product);
    }
    return (
        <div>
        <div className={'product ' + className}>
            {/*<div className={'img'}/>*/}
            <div > <img src ={product.img} className='img' /> </div>
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
            {/*<img className={"photoLabelCheck"} src={photoLabelOreder}/>*/}
        </div>
    );
};

export default ProductItem;