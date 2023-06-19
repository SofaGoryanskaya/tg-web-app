import React, {useState} from 'react';
import './Menu.css';
import photoLabel from "../Form/Takeaway coffee.svg";
import ParentCoffee from "./ParentCoffee";
import "../../App.css";
import "../Main/Main.css";
import Description from "./Description";


const { getData, getDataFlag } = require("../BD/BD");
const products = getData();


const Menu = ()=> {
    const [article, setArticle] = useState('');
    const [value, setValue] = useState('')
    const onClick = (article) => {
        window.location.assign(' https://tg-bot-2-a0669.web.app/' + article);
    }
    const replaceOrder = () => {
        window.location.assign(' https://tg-bot-2-a0669.web.app/checkF');
    }
    const funcloaction = (product) => {
        product.flag = true;
        const productNew = getDataFlag();
        window.sessionStorage.setItem("orderClick", JSON.stringify(productNew));
        window.location.assign(' https://tg-bot-2-a0669.web.app/description');
    }

    const onChangeSubjectONE = (e) => {
        setArticle(e.target.value)
    }
    const onChangeSubjectArticle = (e) => {
        setArticle(e.target.value)
        if (article === 'all') {
            onClick('menu')
        }
        else if (article === 'classic_coffee') {
            onClick('classic_coffee')
        }
        else if (article === 'author_coffee') {
            onClick('author_coffee')
        }
        else if (article === 'tea') {
            onClick('tea')
        }
        else if (article === 'cold') {
            onClick('cold')
        }
        else if (article === 'new_drink') {
            onClick('new_drink')
        }
    }

    return (
        <div className={"menu"}>
            <div className="orderLast" onClick={replaceOrder} > 🛒  </div>
            <p className={'headerMenu'}>  Университет <b className={"coffe"}> кофе</b> </p>

            <div className={"textSelect"}>Выбор раздела меню</div>

            <select value={article}  onChange={onChangeSubjectONE}  className={'select'} >
                <option value={'all'} >Все</option>
                <option value={'classic_coffee'} >Кофе классический</option>
                <option value={'author_coffee'} >Авторский кофе </option>
                <option value={'tea'} >Чай </option>
                <option value={'cold'} >Холодные напитки </option>
                <option value={'new_drink'} >Новинки </option>
            </select>
            <button onClick={onChangeSubjectArticle} className="buttonChangeArticle"> Перейти </button>

            {products.map(item => (
                <ParentCoffee
                    product={item}
                    className={'item'}
                    funcloaction={funcloaction}
                />
            ))}
            <img className={"photo"} src={photoLabel}/>

        </div>
    );
};
export default Menu;
