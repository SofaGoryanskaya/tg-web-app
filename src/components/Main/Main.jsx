import React from 'react';
import Header from "../Header/Header";
import './Main.css';
import back from './background.svg';
import {useTelegram} from "../../hooks/useTelegram";

const Main = () => {
    const onClick = () => {
        window.location.assign('https://tg-bot-d412c.web.app/prof');
    }

    const {user} = useTelegram();
    return (
        <div className={'main'} >
            <Header/>
            <img src={back}/>

        </div>
    );
};

export default Main;