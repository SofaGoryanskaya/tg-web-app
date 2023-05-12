import React, {useCallback, useEffect, useState} from 'react';
import './Menu.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";
import Main from "../Main/Main";
import Header from "../Header/Header";

const {getData} = require('../BD/BD');

//функция по нахождению общей стоимости корзины
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
            return acc += item.price

    }, 0)
}

//список продуктов
const products = [
    {id: '1', title: 'Латте Таро', price: 1, description: '2 л', count: 0},
    {id: '2', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '3', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '4', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '5', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
]
const Menu = (callback, deps) => {
    const {tg, queryId} = useTelegram();
    //для добавления и удаления товаров из корзины
    const [addedItems, setAddedItems] = useState([]);

    const onAdd= (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

       //добавление
            newItems = [...addedItems, product];
            product.count += 1;

        setAddedItems(newItems)

            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`,
                "color": "#583635",
            })
        tg.offEvent('mainButtonClicked', tg.sendData('1111'))

    }
    const removeProduct = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let flag = true;
        let newItems = [];
        if (product.count > 0) {
          // newItems= addedItems.splice(product.id);
            product.count = 0;
            newItems = addedItems.filter(item => item.id !== product.id);
        }

        setAddedItems(newItems)

        tg.MainButton.setParams({
            text: `Купить ${getTotalPrice(newItems)}`,
            "color": "#583635",
        })
    }

    //для кнопки Купить, queryId - отправляем в бэк и обмениваемя информацией
    //отпрвляем запрос
    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch(' https://192.168.0.2:8000/web-data', {
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
        <div className={'list'}>
            <span className={'headerName'}>
                Университет кофе
            </span>

           <Header/>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    removeProduct = {removeProduct}
                    className={'item'}
                />
            ))}
        </div>


    );
};

export default Menu;