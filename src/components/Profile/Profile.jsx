import React, {useCallback, useEffect, useState} from 'react';
import "./Profile.css";
import {useTelegram} from "../../hooks/useTelegram";
import photoLabelOreder from './Frame 36.svg'
import "../../App.css";

let Data = new Date();
let fMonth;

if (Data.getMonth() === 0) {
    fMonth = "01";
} else if (Data.getMonth() === 1) {
    fMonth = "02";
} else if (Data.getMonth() === 2) {
    fMonth = "03";
} else if (Data.getMonth() === 3) {
    fMonth = "04";
} else if (Data.getMonth() === 4) {
    fMonth = "05";
} else if (Data.getMonth() === 5) {
    fMonth = "06";
} else if (Data.getMonth() === 6) {
    fMonth = "07";
} else if (Data.getMonth() === 7) {
    fMonth = "08";
} else if (Data.getMonth() === 8) {
    fMonth = "09";
} else if (Data.getMonth() === 9) {
    fMonth = "10";
} else if (Data.getMonth() === 10) {
    fMonth = "11";
} else if (Data.getMonth() === 11) {
    fMonth = "12";
}

const Profile = () => {
    const [number, setNumber] = useState('');
    const [comment, setComment] = useState('');
    const [subjectONE, setSubjectONE] = useState('с собой');
    const [subjectTWO, setSubjectTWO] = useState('наличными');
    const {tg} = useTelegram();
    const [numberOrder, setNumberOrder] = useState(Math.floor(Math.random() * 100) + 1);
    const [dataMsg, setDayaMsg] = useState('');



    const onSendData = useCallback(() => {
       // setNumberOrder(23);
        const data = {
            number,
            comment,
            subjectONE,
            subjectTWO,
            numberOrder,
            dataMsg
        }
        tg.sendData(JSON.stringify(data));
    }, [number, comment, subjectONE, subjectTWO, numberOrder, dataMsg])

    useEffect(() => {
        setDayaMsg( Data.getHours() + ":" + Data.getMinutes()  + " " + Data.getDate() + "." + fMonth + "." + Data.getFullYear());
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Оформить заказ',
            "color": "#583635"
        })
    }, [])

    useEffect(() => {
            tg.MainButton.show();
    }, [number, comment])

    const onChangeCountry = (e) => {
        setNumber(e.target.value)
    }

    const onChangeStreet = (e) => {
        setComment(e.target.value)
    }

    const onChangeSubjectONE = (e) => {
        setSubjectONE(e.target.value)
    }
    const onChangeSubjectTWO = (e) => {
        setSubjectTWO(e.target.value)
    }
    return (
        <div className={"prof"}>
            <p className={'pattertHeader'}>
                Оформление заказа
            </p>

            <input
                className={'input'}
                type="text"
                placeholder={'Номер телефона'}
                value={number}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Ваш комментарий (например, латте фисташка-малина на безлактотзном молоке'}
                value={comment}
                onChange={onChangeStreet}
            />
            <div className={"textSelect"}>Способ получения заказа</div>
            <select value={subjectONE} onChange={onChangeSubjectONE} className={'select'} >
                <option value={'с собой'}>С собой</option>
                <option value={'здесь'}>Здесь</option>
            </select>

            <div className={"textSelect"}>Способ оплаты заказа</div>
            <select value={subjectTWO} onChange={onChangeSubjectTWO} className={'select'} >
                <option value={'наличными'}>Наличными</option>
                <option value={'по карте'}>По карте</option>
            </select>
            <img className={"photoLabelOreder"} src={photoLabelOreder}/>


        </div>
    );
};

export default Profile;