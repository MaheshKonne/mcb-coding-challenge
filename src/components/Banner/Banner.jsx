import React from 'react';
import Button from '../ui-components/Button';
import Title from '../ui-components/Title';
import './Banner.scss';

const Banner = () => {
    return (
        <section className="banner">
            <div className="bannerContent">
                <Title variant="xl">We scratch, build and play together</Title>
                <div className="bannerDesc">
                    Et has minim elitr intellegat. Mea aeterno eleifend 
                    antiopam ad, nam no suscipit quaerendum. At nam 
                    minimum ponderum. Est audiam animal molestiae te. Ex 
                    duo eripuit mentitum.
                </div>
                <Button variant="outlined inverted">Contact us</Button>
            </div>
        </section>
    );
};

export default Banner;
