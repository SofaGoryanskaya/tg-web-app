import React from 'react';
import "./Form.css";
import arrow from "../BD/Vector.svg";
import photoLabelOreder from "../Profile/Frame 36.svg";


const FormError = () => {
    const onClickCheckF = () => {
        window.location.assign('https://tg-bot-2-a0669.web.app/checkF');
    }
    return (
        <div className="form">
            <img className="arrow" src={arrow} onClick={onClickCheckF}/>
             <p className="errorMsg"> <b className="errorMsgImportant">Ошибка</b> при оформлении заказа! </p>
            <p className="errorMsg"> Проверьте: введено <b className="errorMsgImportant">имя покупателя </b> и выбран хотя бы <b className="errorMsgImportant">один товар </b> </p>
            <img className={"photoLabelOreder"} src={photoLabelOreder}/>
        </div>
    );
};

export default FormError;