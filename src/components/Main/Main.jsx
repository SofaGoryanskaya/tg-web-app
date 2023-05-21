import React from 'react';
import Header from "../Header/Header";
import './Main.css';
import {useTelegram} from "../../hooks/useTelegram";
import photoLabel from "../Form/Takeaway coffee.svg";

const Main = () => {
    const onClick = () => {
        window.location.assign('https://tg-bot-d412c.web.app');
    }
    const {user} = useTelegram();

    return (
        <div className={'main'} >
            <div className="helpA"> a </div>
            <p className={'headerNameApp'}>
                Университет <b className={"coffe"}> кофе</b>
            </p>
            <p className={"text"}>  Мы готовим кофе с особым отношением к нашим гостям, поэтому
                Вы сможете <b className={"word"}>насладиться </b>вкусом свежих зерен из разных уголков мира
                даже если у вас есть всего <b className={"word"}>пару минут</b> перед важным событием.  </p>
            <img className={"photo"} src={photoLabel}/>

        </div>
    );
};

export default Main;