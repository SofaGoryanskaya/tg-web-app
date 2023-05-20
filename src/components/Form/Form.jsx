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

const { getData } = require("../BD/BD");
const products = getData();
let flagCount = 0;

const Form = ()=> {

    const [country, setCountry] = useState('');
    const [price, totalPrice] = useState(0);
    const {tg} = useTelegram();
    const onClick = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/prof');
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

        setAddedItems(newItems);
        totalPrice(getTotalPrice(newItems));

    }
    const removeProduct = (product) => {
        let newItems = [];
        if (product.count > 0) {
            flagCount -=  product.count;
            product.count = 0;
            newItems = addedItems.filter(item => item.id !== product.id);
        }
        setAddedItems(newItems);
        totalPrice(getTotalPrice(newItems));

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
            <button className={'totalPrice'} disabled> {price} </button>

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