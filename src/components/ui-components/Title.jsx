import React from 'react';
import './Title.scss';

const Title = ({ children, size = 'm', variant='normal', color='white' }) => {
    return (
        <div className={`title ${size} ${variant} ${color}`}>
            {children}
        </div>
    )
};

export default Title;
