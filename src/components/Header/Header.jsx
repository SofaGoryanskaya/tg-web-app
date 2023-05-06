import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
//навигационная панель
const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>

            <span className={'username'}>
                {user?.username}
            </span>

            <span className={'title'}>
                Университет кофе
            </span>

        </div>
    );
};

export default Header;