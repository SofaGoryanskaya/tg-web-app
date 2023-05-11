import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
//навигационная панель
const Header = () => {
    const onClick = () => {
        window.location.assign('https://tg-bot-d412c.web.app/prof');
    }
    const {user} = useTelegram();
    return (
        <button onClick={onClick} className={'btn'}>
            <span className={'textUser'}> {user?.username}</span>
        </button>
    );
};
export default Header;