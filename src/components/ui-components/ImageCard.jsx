import React from 'react';
import Title from './Title';
import './ImageCard.scss';

const ImageCard = ({ title, description, image,  }) => {
    return (
        <div className="imageCard">
            <img src={image} />
            <Title className="title">{title}</Title>
            <div className="description">{description}</div>
        </div>
    );
};

export default ImageCard;
