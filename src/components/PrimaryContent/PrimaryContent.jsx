import React from 'react';
import './PrimaryContent.scss';
import primaryImg from '../../assets/image_01.png';
import boxImg from '../../assets/box.png';
import truckImg from '../../assets/truck.png';
import Title from '../ui-components/Title';

const PrimaryContent = () => {
    return (
        <section className="primaryContent">
            <div>
                <Title size="l" variant="primary">
                    Fostering creativity and 
                    innovationeam definiebas 
                    reformidans, exerci persecuti
                </Title>
                <div className="descContainer">
                    <div>
                        <img src={boxImg} />
                        <div>
                            Et has minim elitr intellegat. Mea 
                            aeterno eleifend antiopam ad, 
                            nam no suscipit quaerendum.
                        </div>
                    </div>
                    <div>
                        <img src={truckImg} />
                        <div>
                            Et has minim elitr intellegat. Mea 
                            aeterno eleifend antiopam ad, 
                            nam no suscipit quaerendum.
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src={primaryImg} />
            </div>
        </section>
    );
};

export default PrimaryContent;
