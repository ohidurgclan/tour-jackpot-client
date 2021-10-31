import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import img1 from '../../../images/slider/slide1.jpg';
import img2 from '../../../images/slider/slide2.jpg';
import img3 from '../../../images/slider/slide3.jpg';
import img4 from '../../../images/slider/slide4.jpg';

const Slider = () => {
    return (
        <>
          <Carousel>
              {/* Slide 1 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2 className="slider-h2">The Agency You Trust to</h2>
                  <h4 className="slider-h4">Care For Your Journey</h4>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="slider-h2">A Good Deal of The Futute</h2>
                <h4 className="slider-h4">Relaxness & Health Care</h4>    
                </Carousel.Caption>
                </Carousel.Item>
              {/* Slide 3 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="slider-h2">Best Holiday Deals</h2>
                <h4 className="slider-h4">For Couple</h4>    
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 4 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img4}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="slider-h2">The Great Place for</h2>
                <h4 className="slider-h4">Physical Relaxness</h4>    
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </>
    );
};

export default Slider;