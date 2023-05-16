import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";



const Profile = () => {
    const [country, setCountry] = useState('');
    const {tg} = useTelegram();
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onSendData = useCallback(() => {
        const data = {
            country
        }
        tg.sendData(JSON.stringify(data));
    }, [country])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            //"отписаться от слушателя событий"
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if( !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country])

    return (
        <div className={'prof'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
        </div>
    );
};

export default Profile;