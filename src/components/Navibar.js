import logo from '../assets/logo.png';
import '../styles/_app.scss'
import '../styles/navbar.scss'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";

const Navibar = () => {
    return (  
    <Navbar fixed = "top" collapseOnSelect expand="md" bg="light" variant="light" >
        <Container className = "nav-container">
        <Navbar.Brand className = "nav-brand" href="\"><img src = {logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="expand-btn"></Navbar.Toggle>
        <Navbar.Collapse id="expand-btn">
            <Nav className="me-auto">
                <Nav.Link className = "nav-link nav-link-ltr"  href = "/">Home</Nav.Link>
                <Nav.Link className = "nav-link nav-link-ltr" >Features</Nav.Link>
                <Nav.Link className = "nav-link nav-link-ltr"  href = "/">Home</Nav.Link>
                <Nav.Link className = "nav-link nav-link-ltr" >Features</Nav.Link>
                <Nav.Link className = "nav-link nav-link-ltr" >Pricing</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav.Item>
            <Dropdown>
                <Dropdown.Toggle className = "dropdown-toggle"  id="dropdown-basic">
                    EN
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">CN</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item className = "phone-num">
            Phone number
        </Nav.Item>
        </Container>
    </Navbar> 
);
}
 
export default Navibar;