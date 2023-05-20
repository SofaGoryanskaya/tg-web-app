import React from 'react';
import "./Connaction.css";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import {useClipboard} from "use-clipboard-copy";
const Connection = () => {
    let center = [55.04356688094231,82.94915840806416];
    const defaultState = {
        center: center,
        zoom: 15,
    };
    const clipboard = useClipboard();

    return (
        <div className="map">
            <span className={'textUsermain'}> a</span>
            <p className={'headerNameMap'}>
                Университет <b className={"coffe"}> кофе</b>
            </p>
        <YMaps>
            <Map
                defaultState={defaultState}
                width={'100%'}
                background = {'white'}
            >
                <Placemark geometry={[55.04356688094231,82.94915840806416]} />
            </Map>


            <div className="contactinf">Контактная информация </div>
            <div className="numberCoffe">
                <div>Номер телефона: </div>
                <button onClick={clipboard.copy} className="copyInt">8888888888</button>

                {/*Телеграм: https://t.me/CofeeGruanskaya_bot*/}
                {/*Почта:*/}
            </div>
            <div className="contactinf">График приема заказов </div>
            <div className="numberCoffe">
                Понедельник: 7:00 - 20:00
                Вторник: 7:00 - 20:00
                Среда: 7:00 - 20:00
                Четверг: 7:00 - 20:00
                Пятница: 7:00 - 20:00
                Суббота: 9:00 - 22:00
                Воскресенье: 9:00 - 22:00
            </div>



        </YMaps>
        </div>

    );
};

export default Connection;