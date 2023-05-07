import React from 'react';
import'./Main.css';
import {useTelegram} from "../../hooks/useTelegram";
const Main = () => {
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

export default Main;