import React, {useState} from 'react';
import './Menu.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
//функция по нахождению общей стоимости корзины
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}
//список продуктов
const products = [
    {id: '1', title: 'Латте Таро', price: 240, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]
const Menu = () => {


    const {tg, queryId} = useTelegram();
    //для добавления и удаления товаров из корзины
    const [addedItems, setAddedItems] = useState([]);
    const onAdd = (product) => {
        //находим про id товар в корзине
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

    return (
        //массив продуктов
        <div className={'list'}>
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