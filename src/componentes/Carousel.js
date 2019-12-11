import React from 'react';

import {Carousel} from 'react-bootstrap';

const Carrousel = () => (
    <div className="d-none d-md-block d-lg-block d-xl-block">
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" style={{height: '500px'}} src={`/2.jpg`} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Compras seguras</h3>
                    <p>Tus compras son seguras y rápidas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" style={{height: '500px'}} src={`/carrousel3.png`} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Compras seguras</h3>
                    <p>Tus compras son seguras y rápidas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" style={{height: '500px'}} src={`/carrousel6.jpg`} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Compras seguras</h3>
                    <p>Tus compras son seguras y rápidas.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    
);

export default Carrousel;