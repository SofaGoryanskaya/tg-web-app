import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
//навигационная панель
const Header = () => {
    const {user} = useTelegram();

    return (
        <div className={'header'}>

            <span className={'username'} onClick={onClick}>
                {user?.username}
            </span>

            <span className={'headerName'}>
                Университет кофе
            </span>

        </div>
    );
};

export default Header;