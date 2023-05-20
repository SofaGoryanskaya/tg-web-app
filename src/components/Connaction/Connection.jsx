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

            <div>
                <input ref={clipboard.target} />
                <button onClick={clipboard.copy}>Copy</button>
            </div>

            <div className="contactinf">Контактная информация </div>
            <div className="numberCoffe">
                <div>Номер телефона: </div>
                <button onClick={clipboard.copy} className="copyInt">8888888888</button>

                {/*Телеграм: https://t.me/CofeeGruanskaya_bot*/}
                {/*Почта: universitycoffe@gmail.com*/}
            </div>
            <div className="contactinf">График приема заказов </div>
            <div className="numberCoffe">
                Понедельник: 7:00 - 20:00
               <p> Вторник: 7:00 - 20:00 </p>
                <p>  Среда: 7:00 - 20:00</p>
                <p>  Четверг: 7:00 - 20:00</p>
                <p> Пятница: 7:00 - 20:00</p>
                <p>  Суббота: 9:00 - 22:00</p>
                <p>  Воскресенье: 9:00 - 22:00</p>
            </div>



        </YMaps>
        </div>

    );
};

export default Connection;