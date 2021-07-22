//assets
import logo from '../assets/logo.png';
import '../styles/_app.scss'
import '../styles/navbar.scss'

//components
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";

//cookies
import Cookies from 'universal-cookie';

//localization
import LocalizedStrings from 'react-localization';

const cookies = new Cookies();
let strings = new LocalizedStrings({
    EN:{
      how:"How do you want your egg today?",
      boiledEgg:"Boiled egg",
      softBoiledEgg:"Soft-boiled egg",
      choice:"How to choose the egg"
    },
    CN: {
      how:"Come vuoi il tuo uovo oggi?",
      boiledEgg:"Uovo sodo",
      softBoiledEgg:"Uovo alla coque",
      choice:"Come scegliere l'uovo"
    }
   });

const Navibar = ({currLang, setCurrLang}) => {

    strings.setLanguage(currLang);

    const handleLangChange = ()=>
    {
        if(currLang === "EN")
        {
            setCurrLang('CN');
            cookies.set('lang', 'CN', { path: '/' });
            strings.setLanguage(currLang);
        }
        else
        {
            setCurrLang('EN');
            cookies.set('lang', 'EN', { path: '/' });
            strings.setLanguage(currLang);
        }
    }
    return (  
    <Navbar className = "navibar" fixed = "top" collapseOnSelect expand="md" bg="light" variant="light" >
        <Container className = "nav-container">
        <Navbar.Brand className = "nav-brand" href="\"><img src = {logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="expand-btn"></Navbar.Toggle>
        <Navbar.Collapse id="expand-btn">
            <Nav className="me-auto">
                <Nav.Link className = "navi-link"  href = "/">Home</Nav.Link>
                <Nav.Link className = "navi-link" >Features</Nav.Link>
                <Nav.Link className = "navi-link"  href = "/">Home</Nav.Link>
                <Nav.Link className = "navi-link" >Features</Nav.Link>
                <Nav.Link className = "navi-link" >Pricing</Nav.Link>
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
            Phone number. Currlang = {currLang}
        </Nav.Item>
        <Nav.Item className = "phone-num">
            <button onClick = {handleLangChange}>Clcik me</button>
        </Nav.Item>
        </Container>
    </Navbar> 
);
}
 
export default Navibar;