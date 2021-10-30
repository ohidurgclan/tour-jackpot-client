import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackage from '../../hooks/usePackage';
import Package from '../Subitem/Package/Package';
import './Packages.css';

const Packages = () => {
      const [packages] = usePackage();
    return (
        <>
          <div className="service-pack">
          <Container className="mb-5 mt-5">
            <Row>
              <h2 className="text-center fw-bold mb-5">Our Service Packages</h2>
            {
              packages.map(packageItem => <Package
              key={packageItem._id}
              package={packageItem}
              ></Package>)
            }
            </Row>
          </Container>
          </div>
        </>
    );
};

export default Packages;