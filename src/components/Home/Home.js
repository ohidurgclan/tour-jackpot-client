import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackage from '../../hooks/usePackage';
import Package from '../Subitem/Package/Package';
import Slider from '../Subitem/Slider/Slider';
import Teamslider from '../Subitem/Teamslider/Teamslider';
const Home = () => {
    const [packages] = usePackage();
    return (
        <>
            <Slider></Slider>
            <Container className="mt-5 mb-5">
                <Row>
              <h2 className="text-center fw-bold mb-5">Our Service Packages</h2>
            {
              packages.slice(0, 6).map(packageItem => <Package
              key={packageItem._id}
              package={packageItem}
              ></Package>)
            }
            <Teamslider></Teamslider>
            </Row>
                
            </Container>
        </>
    );
};

export default Home;