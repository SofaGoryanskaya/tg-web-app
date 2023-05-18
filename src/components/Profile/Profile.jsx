import React, {useCallback, useEffect, useState} from 'react';
import "./Profile.css";
import {useTelegram} from "../../hooks/useTelegram";
import photoLabelOreder from './Frame 36.svg'

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

const Profile = () => {
    const [number, setNumber] = useState('');
    const [comment, setComment] = useState('');
    const [subjectONE, setSubjectONE] = useState('с собой');
    const [subjectTWO, setSubjectTWO] = useState('наличными');
    const {tg} = useTelegram();
    const [numberOrder, setNumberOrder] = useState(0);
    // setNumberOrder(getRandomArbitrary(100, 1000000));

    const onSendData = useCallback(() => {
        const data = {
            number,
            comment,
            subjectONE,
            subjectTWO,
            // numberOrder
        }
        tg.sendData(JSON.stringify(data));
    }, [number, comment, subjectONE, subjectTWO])

    useEffect(() => {
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
        if(!comment || !number) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
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
            <p className={'makingOrder'}>
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
                placeholder={'Ваш комментарий'}
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