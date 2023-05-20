import React from 'react';
import "./Form.css";

const FormError = () => {
    const onClickCheckF = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/checkF');
    }
    return (
        <div>
            {/*<button onClick={onClickCheckF} className={'btnBackError'}>*/}
            {/*    <span className={'errorMsgImportant'}> Назад </span>*/}
            {/*</button>*/}
            <span className={'btnBackError'} onClick={onClickCheckF}> Назад </span>
             <p className="errorMsg"> <b className="errorMsgImportant">Ошибка</b> при оформлении заказа! </p>
            <p> Проверьте: введено <b className="errorMsgImportant">имя покупателя </b> и выбран хотя бы <b className="errorMsgImportant">один товар </b>. </p>
        </div>
    );
};

export default FormError;