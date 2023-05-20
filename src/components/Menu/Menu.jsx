import React, {useCallback, useEffect, useState} from 'react';
import './Menu.css';
import ProductItem from "../ProductItem/ProductItem";
import photoLabel from "../Form/Takeaway coffee.svg";
import ParentCoffee from "./ParentCoffee";

const { getData } = require("../BD/BD");
const products = getData();

const Menu = ()=> {
    const [article, setArticle] = useState('');
    const [category, setCategory] = useState('main');
    const onClick = (article) => {
        window.location.assign('https://tg-bot-d412c.web.app/' + article);
    }
    const onChange = (e) => {
        setArticle(e.target.value)
        onClick(article)
    }

    return (
        <div className={"menu"}>

            <p className={'headerNameApp'}>
                Университет <b className={"coffe"}> кофе</b>
            </p>

            <div className={"textSelect"}>Выбор раздела меню</div>
            <select value={category} onChange={onChange} className={'select'} >
                <option value={'cold'}>Кофе</option>
                <option value={'cold'}>Холодные напитки</option>
                <option value={'autortea'}>Авторский чай</option>
            </select>

            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'item'}
                />
            ))}

            <img className={"photo"} src={photoLabel}/>
        </div>
    );
};
export default Menu;
