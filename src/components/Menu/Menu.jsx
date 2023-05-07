import React, {useCallback, useEffect, useState} from 'react';
import './Menu.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";
import Main from "../Main/Main";

const {getData} = require('../BD/BD');
//функция по нахождению общей стоимости корзины
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}
//список продуктов
const products = [
    {id: '1', title: 'Латте Таро', price: 240, description: '350 мл'},
    {id: '2', title: 'Латте Таро', price: 240, description: '350 мл'},
    {id: '3', title: 'Латте Таро', price: 240, description: '350 мл'},
    {id: '4', title: 'Латте Таро', price: 240, description: '350 мл'},
    {id: '5', title: 'Латте Таро', price: 240, description: '350 мл'},
]
const Menu = () => {
    const {tg, queryId} = useTelegram();
    //для добавления и удаления товаров из корзины
    const [addedItems, setAddedItems] = useState([]);
    const onAdd = (product) => {
        //находим по id товар в корзине
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];
        //если товар в корзине есть - удаляем, иначе - добавляем в конец корзины
        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems)

        //если корзина пустая - убираем главную кнопку, иначе - считааем общую стоимость с помощью getTotalPrice
        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    //для кнопки Купить, queryId - отправляем в бэк и обмениваемя информацией
    //отпрвляем запрос
    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        //fetch-запрос
        fetch('https://tg-bot-d412c.web.app/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    return (
        //массив продуктов
        <div className={'list'}>
           <Main/>

            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}

        </div>


    );
};

export default Menu;