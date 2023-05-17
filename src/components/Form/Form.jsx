import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
            return acc += item.price

    }, 0)
}

const products = [
    {id: '1', title: 'Латте Таро', price: 1, description: '350 л', count: 0},
    {id: '2', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '3', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '4', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
    {id: '5', title: 'Латте Таро', price: 1, description: '350 мл', count: 0},
]

const Form = () => {
    const [country, setCountry] = useState('');
    const {tg} = useTelegram();
    const onClick = () => {
        window.location.assign('https://tg-bot-d412c.web.app/prof');
    }

    const [addedItems, setAddedItems] = useState([]);

    // const onSendData = useCallback(() => {
    //     const data = {
    //         country,
    //         totalPrice: getTotalPrice(addedItems)
    //
    //     }
    //     tg.sendData(JSON.stringify(data));
    // }, [country])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onClick)
        return () => {
            tg.offEvent('mainButtonClicked', onClick)
        }
    }, [onClick])

    useEffect(() => {
        tg.MainButton.setParams({
            // text: `Купить ${getTotalPrice(newItems)}`,
            text: 'Купить',
            "color": "#583635",
        })
    }, [])


    const onAdd= (product) => {
        // const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];
       //добавление
        newItems = [...addedItems, product];
        product.count += 1;

        setAddedItems(newItems)

    }
    const removeProduct = (product) => {
        let newItems = [];
        if (product.count > 0) {
            product.count = 0;
            newItems = addedItems.filter(item => item.id !== product.id);
        }
        setAddedItems(newItems)

    }


    useEffect(() => {
        if(!country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />

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

export default Form;