import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackage from '../../hooks/usePackage';
import Package from '../Subitem/Package/Package';
import Slider from '../Subitem/Slider/Slider';
import Teamslider from '../Subitem/Teamslider/Teamslider';
import Feedslider from '../Subitem/Feedslider/Feedslider';
import './Home.css';
const Home = () => {
    const [packages] = usePackage();
    return (
        <>
            <Slider></Slider>
            <Container className="mt-5 mb-5">
              <Row>
                <h2 className="text-center fw-bold mb-5 home-h2">Our Service Packages</h2>
                {
                  packages.slice(0, 6).map(packageItem => <Package
                  key={packageItem._id}
                  package={packageItem}
                  ></Package>)
                }
                <h2 className="mb-5 fw-bold text-center mt-5 home-h2">Our Management Team</h2>
                <Teamslider></Teamslider>
                <h2 className="fw-bold text-center mt-5 home-h2">Our Coutomer Review</h2>
                <Feedslider></Feedslider>
            </Row>  
            </Container>
        </>
    );
};

export default Home;