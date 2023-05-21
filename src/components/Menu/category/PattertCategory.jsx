import React from 'react';
import ParentCoffee from "../ParentCoffee";
import "../Menu.css"
const PattertCategory = ({titleProduct}) => {
    const onClick = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/menu');
    }
    return (
        <div>
            <p className={'headerMenu'}> {titleProduct} </p>
            <button onClick={onClick} className={'btnBack'}>
                <span className={'textBtnBack'}> Назад </span>
            </button>

        </div>
    );
};

export default PattertCategory;