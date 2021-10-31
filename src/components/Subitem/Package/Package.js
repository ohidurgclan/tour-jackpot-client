import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const {key, name, price, details, img} = props.package;
    return (
        <>
            <Col lg={6} md={6} sm={12} xs={12}>
                <div className="service-card w-100">
                    <img className="img img-fluid card-imgs" src={img} alt="" />
                    <div className="service-info">
                        <h4 className="fw-bold">{name}</h4>
                        <h5>Price: <span className="fw-bold">${price}</span></h5>
                        <div>
                            <p>{details.slice(0, 110)}</p>
                        </div>
                    <NavLink to={`/package/${key}`}>
                        <button className="appointment-btn">Details</button>
                    </NavLink>   
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Package;