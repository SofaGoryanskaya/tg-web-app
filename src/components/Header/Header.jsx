import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
//навигационная панель
const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>x</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;