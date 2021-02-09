import React from 'react';
import './Button.scss'

const Button = ({children, variant = '', onClick}) => {

    return (
        <button onClick={onClick} className={variant}>
            {children}
        </button>
    );
};

export default Button;
