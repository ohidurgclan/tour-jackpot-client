import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return (
      <>
        <Navbar className="header-section" collapseOnSelect expand="lg">
          <Container>
            <Navbar className="logo" as={NavLink} to="/">Tour-<span>Jackpot</span></Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-bar">
              <Nav.Link as={NavLink} to="/home" activeStyle={{ fontWeight: "bold", color: "#34d1ff" }}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/addservice" activeStyle={{fontWeight: "bold",color: "#34d1ff"}}>Add Service</Nav.Link>
              <Nav.Link as={NavLink} to="/services" activeStyle={{fontWeight: "bold",color: "#34d1ff"}}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeStyle={{fontWeight: "bold",color: "#34d1ff"}}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeStyle={{ fontWeight: "bold", color: "#34d1ff" }}>Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/login" activeStyle={{ fontWeight: "bold", color: "#34d1ff" }}>login</Nav.Link>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;