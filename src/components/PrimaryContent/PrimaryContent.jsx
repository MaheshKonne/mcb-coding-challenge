import React from 'react';
import './PrimaryContent.scss';
import primaryImg from '../../assets/image_01.png';
import boxImg from '../../assets/box.png';
import truckImg from '../../assets/truck.png';
import Title from '../ui-components/Title';

const PrimaryContent = () => {
    return (
        <section className="primaryContent">
            <div className="textContainer">
                <div className="titleContainer">
                    <Title size="l" variant="primary">
                        Fostering creativity and 
                        innovationeam definiebas 
                        reformidans, exerci persecuti
                    </Title>
                </div>
                <div className="descContainer">
                    <div>
                        <img src={boxImg} alt="box image" />
                        <div>
                            Et has minim elitr intellegat. Mea 
                            aeterno eleifend antiopam ad, 
                            nam no suscipit quaerendum.
                        </div>
                    </div>
                    <div>
                        <img src={truckImg} alt="truck image" />
                        <div>
                            Et has minim elitr intellegat. Mea 
                            aeterno eleifend antiopam ad, 
                            nam no suscipit quaerendum.
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src={primaryImg} alt="about image" />
            </div>
        </section>
    );
};

export default PrimaryContent;
