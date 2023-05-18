import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
import photoLabel from "./Takeaway coffee.svg";
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
let flagCount = 0;

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
        flagCount +=1;

        setAddedItems(newItems)

    }
    const removeProduct = (product) => {
        let newItems = [];
        if (product.count > 0) {
            flagCount -=  product.count;
            product.count = 0;
            newItems = addedItems.filter(item => item.id !== product.id);
        }
        setAddedItems(newItems)

    }


    useEffect(() => {
        if(!country || flagCount <= 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, flagCount])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }


    return (
        <div className={"form"}>
            <h4>Введите имя заказчика: </h4>
            <input
                className={'input'}
                type="text"
                placeholder={'*обязатльно для ввода'}
                value={country}
                onChange={onChangeCountry}
            />
            {/*<button className={'count'} disabled> {product.count} </button>*/}
            {products.map(item => (
                        <ProductItem
                            product={item}
                            onAdd={onAdd}
                            removeProduct = {removeProduct}
                            className={'item'}
                        />

                    ))}

            <img className={"photo"} src={photoLabel}/>
        </div>
    );
};

export default Form;