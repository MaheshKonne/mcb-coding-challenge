import React from 'react';
import './Title.scss';

const Title = ({ children, size = 'm', variant='' }) => {
    return (
        <div className={`title ${size} ${variant}`}>
            {children}
        </div>
    )
};

export default Title;
