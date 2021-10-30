import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Order.css';


const Order = (props) => {    
    const { users } = useFirebase();
    const { orderData } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch("http://localhost:8030/package")
      .then((res) => res.json())
      .then((data) => setData(data));
    }, []);
    const orderItem = data.filter(singleData => singleData === orderData);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) =>
    {
        data.email = users?.email;
        data.orderName = orderItem?.name;
        data.orderImg = orderItem?.img;
        data.details = orderItem?.details;
        data.orderPrice = orderItem?.price;
        data.status = "Pending";
        axios
            .post("http://localhost:8030/package", data)
            .then((res) =>
            {
                if (res.data.key)
                {
                    alert("Successfully Registard");
                    reset();
                }
            });
    };

    return (
        <>
          <Container>
        <Row>
          <Col className="my-5" md={6}>
            <h3>Events Name : {orderItem?.name}</h3>
            <img className="img-fluid my-3" src={orderItem?.img} alt="" />
            <h3> Price : {orderItem?.price}</h3>
            <p>description : {orderItem?.description}</p>
          </Col>
          <Col md={6} className="mt-5 d-flex">
            <div className="add-reg-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("Name", {})} />
                <input type="number" placeholder="Age" {...register("Age", {})} />
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="number" placeholder="Mobile" {...register("Mobile", {})} />
                <input type="text" placeholder="Address" {...register("Address", {})} />
                <input className="appointment-btn" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>  
        </>
    );
};

export default Order;