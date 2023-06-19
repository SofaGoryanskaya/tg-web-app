import React from 'react';
import "./Connaction.css";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import {useClipboard} from "use-clipboard-copy";
import copy from "./Copy.svg";
import "../Main/Main.css";
import photoLabel from "../Form/Takeaway coffee.svg";
import {useTelegram} from "../../hooks/useTelegram";

const Connection = () => {
    let center = [55.04356688094231,82.94915840806416];
    const defaultState = {
        center: center,
        zoom: 15,
    };
    const clipboard1 = useClipboard();
    const clipboard2 = useClipboard();
    const clipboard3 = useClipboard();

    const {user} = useTelegram();
    return (
        <div className="map">
            <div className="helpA"> a </div>
            <p className={'headerNameApp'}>
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

            <div className="numberCoffee">
                <div className="block">Номер телефона: </div>
                <input ref={clipboard1.target} value="88888888888" readOnly className="numberPhone"/>
                <button onClick={clipboard1.copy} className="copyBtn">
                    <img className={"copy"} src={copy}/>
                </button>

                <div className="block">Телеграм: </div>
                <input ref={clipboard2.target} value="@CoffeeHouseGoryanS_bot" readOnly className="numberPhone"/>
                <button onClick={clipboard2.copy} className="copyBtn">
                    <img className={"copy"} src={copy}/>
                </button>

                <div className="block">Почта: </div>
                <input ref={clipboard3.target} value="universitycoffe@gmail.com" readOnly className="numberPhone"/>
                <button onClick={clipboard3.copy} className="copyBtn">
                    <img className={"copy"} src={copy}/>
                </button>
            </div>

            <div className="contactinf">График приема заказов </div>
            <div className="tableCoffee">
                Понедельник:    7:00 - 20:00
               <p> Вторник:  7:00 - 20:00  </p>
                <p>  Среда:  7:00 - 20:00</p>
                <p>  Четверг:  7:00 - 20:00</p>
                <p> Пятница:   7:00 - 20:00</p>
                <p>  Суббота:   9:00 - 22:00</p>
                <p>  Воскресенье:  9:00 - 20:00</p>
            </div>

            <img className={"photo"} src={photoLabel}/>

        </YMaps>
        </div>

    );
};

export default Connection;