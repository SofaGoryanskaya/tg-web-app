import React from 'react';
import './Button.css';
const Button = (props) => {
    return (
        <button
            {...props}
            className={'button ' + props.className}
            disabled={props.disable}
            onClick={props.onClick}

        />

    );
};


export default Button;