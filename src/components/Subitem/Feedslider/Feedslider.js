import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import img1 from '../../../images/feedslider/testimonial-01.jpg';
import img2 from '../../../images/feedslider/testimonial-02.jpg';
import img3 from '../../../images/feedslider/testimonial-03.jpg';
import './Feedslider.css';

const Feedslider = () => {
    return (
        <>
            <Col lg={12} md={12} sm={12} >
                <Carousel className="feed-bg">
                    <Carousel.Item className="text-center f-slide" interval={800}>
                        <img
                        className="fs-img img img-fluid"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption className="fs-caption">
                            <p>I recently used Audley Travel for a trip to Australia and New Zealand. The destination is great. Regarding Audley, the hotels and most excursions were good. However, you choose a travel agency for help with the logistics--easy directions, smooth travel, etc.</p>
                            <h5>Maria Rusconi</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="text-center f-slide" interval={500}>
                        <img
                        className="fs-img img img-fluid"
                        src={img2}
                        alt="Second slide"
                        />
                        <Carousel.Caption className="fs-caption">
                            <p>We recently used Winter Park Escapes to book a property. The property was in a total state of disrepair and we had to call maintenance FIVE times. When we complained, they offered to refund 1/2 of one day. Don’t use Winter Park Escapes!</p>
                            <h5>Richard William</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="text-center f-slide">
                        <img
                        className="fs-img img img-fluid"
                        src={img3}
                        alt="Third slide"
                        />
                        <Carousel.Caption className="fs-caption">
                            <p>I always a little nervous about booking a trip on line but everything worked out perfect. We were picked up at our hotel promptly and they arrived with a large Mercedes Benz caravan to take us to Siem Reap. The ride was conformable and in the heat the air conditioner was very powerful.</p>
                            <h5>Amanda Kinedy</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </>
    );
};

export default Feedslider;