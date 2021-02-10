import React from 'react';
import './Products.scss';
import imgArt from '../../assets/highlight_01.png';
import imgGraffiti from '../../assets/highlight_02.png';
import imgFashion from '../../assets/highlight_03.png';
import imgAnimation from '../../assets/highlight_04.png';
import ImageCard from '../ui-components/ImageCard';

const subjects = [{
    title: 'Art',
    description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
    image: imgArt,
}, {
    title: 'Graffiti',
    description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
    image: imgGraffiti,
}, {
    title: 'Fashion',
    description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
    image: imgFashion,
}, {
    title: 'Animation',
    description: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.',
    image: imgAnimation,
}];

const Products = () => {
    return (
        <section className="products">
        {
            subjects.map(item => (
                <ImageCard key={item.title} {...item} />
            ))
        }
        </section>
    );
};

export default Products;
