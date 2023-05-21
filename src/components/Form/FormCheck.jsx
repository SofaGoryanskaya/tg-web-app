import React, {useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
import photoLabel from "./Takeaway coffee.svg";
import "./Form.css"

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price

    }, 0)
}

const { getData } = require("../BD/BD");
// const products = getData();
const order = JSON.parse(window.sessionStorage.getItem('order'))

const products = order
    ? getData().map(item => {
        const sought = order.find(v => v.id === item.id)
        return sought ? sought : item
    })
    : getData();


let flagCount = 0;

const FormCheck = () => {
    const [country, setCountry] = useState('' ? ' ' : JSON.parse(window.sessionStorage.getItem('name')));
    const [price, totalPrice] = useState(products.reduce((price, product) => price + product.price * product.count, 0));
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const  onClickMainButton = () => {

        if(!country || flagCount <= 0){
            window.location.assign('https://tg-bot-2-a0669.web.app/formerror');
        }
        else {
            window.location.assign('https://tg-bot-2-a0669.web.app/prof');
        }
    }
    const onAdd= (product) => {
        let newItems = [];
        //добавление
        newItems = [...addedItems, product];
        product.count += 1;
        flagCount +=1;
        setAddedItems(newItems);
        totalPrice(getTotalPrice(newItems));
        window.sessionStorage.setItem("order", JSON.stringify(products));
    }
    const removeProduct = (product) => {
        let newItems = [];
        if (product.count > 0) {
            flagCount -=  product.count;
            product.count = 0;
            newItems = addedItems.filter(item => item.id !== product.id);
            setAddedItems(newItems);
            totalPrice(getTotalPrice(newItems));
            window.sessionStorage.setItem("order", JSON.stringify(products));
        }
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
        window.sessionStorage.setItem("name", JSON.stringify(country));
    }

    return (
        <div className={"form"}>
            <button className="totalPrice" onClick={onClickMainButton} > 🛒 {price} </button>
            <h4>Введите имя получателя: </h4>
            <input
                className={'input'}
                type="text"
                placeholder={'*обязатльно для ввода'}
                value={country}
                onChange={onChangeCountry}
            />

            {products.map(item => {
                return (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    removeProduct={removeProduct}
                    className={'item'}
                />
            )
            })}

            <img className={"photo"} src={photoLabel}/>
        </div>
    );
};

export default FormCheck;