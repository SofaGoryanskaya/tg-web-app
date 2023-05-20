import React, {useState} from 'react';
import './Menu.css';
import photoLabel from "../Form/Takeaway coffee.svg";
import ParentCoffee from "./ParentCoffee";

const { getData } = require("../BD/BD");
const products = getData();

const Menu = ()=> {
    const [article, setArticle] = useState('');
    const onClick = (article) => {
        window.location.assign(' https://tg-bot-2-a0669.web.app/' + article);
    }

    const onChangeSubjectONE = (e) => {
        setArticle(e.target.value)
    }
    const onChangeSubjectArticle = (e) => {
        setArticle(e.target.value)
        if (article === 'cold') {
            onClick('cold')
        }
    }

    return (
        <div className={"menu"}>
            <p className={'headerNameApp'}>
                Университет <b className={"coffe"}> кофе</b>
            </p>
            <div className={"textSelect"}>Выбор раздела меню</div>


            <select value={article}  onChange={onChangeSubjectONE}  className={'select'} >
                <option value={'все'} >Все</option>
                <option value={'cold'} >Холодные напитки</option>
                <option value={'tea'} >Чаи </option>
            </select>
            <button onClick={onChangeSubjectArticle} className="buttonChangeArticle"> Перейти </button>

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
