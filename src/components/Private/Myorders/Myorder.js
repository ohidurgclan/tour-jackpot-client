import React, { useEffect, useState } from 'react';
import useFirebase from "../../../hooks/useFirebase";
import './Myorder.css'

const Myorder = () => {
    const { users } = useFirebase();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8030/order/${users?.email}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [users.email]);
    console.log(order);
    return (
        <>
            <h2>my order : {order.length}</h2>
        </>
    );
};

export default Myorder;