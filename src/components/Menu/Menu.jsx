import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import './Menu.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import Header from "../Header/Header";

//функция по нахождению общей стоимости корзины
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
            return acc += item.price

    }, 0)
}

//список продуктов
const products = [
    {id: '1', title: 'Латте Таро', price: 1, description: '350 л', count: 0},
    {id: '2', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '3', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '4', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '5', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
]
const Menu = () => {
    const {tg, queryId} = useTelegram();
    //для добавления и удаления товаров из корзины
    const [addedItems, setAddedItems] = useState([]);

    const onAdd= (product) => {
        // const alreadyAdded = addedItems.find(item => item.id === product.id);
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
        // tg.offEvent('mainButtonClicked', tg.sendData('1111'))

    }
    const removeProduct = (product) => {
        let newItems = [];
        if (product.count > 0) {
            product.count = 0;
            newItems = addedItems.filter(item => item.id !== product.id);
        }

        setAddedItems(newItems)

        tg.MainButton.setParams({
            text: `Купить ${getTotalPrice(newItems)}`,
            "color": "#583635",
        })
    }

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId: queryId
        }

        axios.post('https://79.141.77.109:8080/web-data', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    //для кнопки Купить, queryId - отправляем в бэк и обмениваемя информацией
    //отпрвляем запрос


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
