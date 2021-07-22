//assets
import logo from '../assets/logo.png';
import '../styles/_app.scss'
import '../styles/navbar.scss'

//components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown'

//cookies
import Cookies from 'universal-cookie';

//localization
import LocalizedStrings from 'react-localization';

const cookies = new Cookies();
let strings = new LocalizedStrings({
    EN:{
        home:"Home",
        about:"About us",
        prod_serv:"Products and services",
        promos:"Promotions",
        contact:"Contact Us"
    },
    CN: {
        home:"首页",
        about:"关于我们",
        prod_serv:"产品与服务",
        promos:"促销",
        contact:"联络我们"
    }
   });

const Navibar = ({currLang, setCurrLang}) => {

    strings.setLanguage(currLang);

    //functions to change the current language to chinese or english seperately
    const changeToEN = () =>
    {
        setCurrLang('EN');
        cookies.set('lang', 'EN', { path: '/' });
        strings.setLanguage(currLang);
    }
    const changeToCN = () =>
    {
        setCurrLang('CN');
        cookies.set('lang', 'CN', { path: '/' });
        strings.setLanguage(currLang);
    }
    return (  
    <Navbar className = "navibar" fixed = "top" collapseOnSelect expand="lg" bg="light" variant="light" >
        <Container className = "nav-container">
        <Navbar.Brand className = "nav-brand" href="\"><img src = {logo} alt = {"logo-brand"}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="expand-btn"></Navbar.Toggle>
        <Navbar.Collapse id="expand-btn">
            <Nav className="me-auto navi-list">
                <Nav.Link className = "navi-link"  href = "/">{strings.home}</Nav.Link>
                <Nav.Link className = "navi-link" href = "/about">{strings.about}</Nav.Link>
                <Nav.Link className = "navi-link"  href = "/">{strings.prod_serv}</Nav.Link>
                <Nav.Link className = "navi-link" >{strings.promos}</Nav.Link>
                <Nav.Link className = "navi-link" >{strings.contact}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav.Item>
            <Dropdown>
                <Dropdown.Toggle className = "dropdown-toggle"  id="dropdown-basic">
                    {currLang === "EN" ? "EN" : "简体中文"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick = {changeToEN}>EN</Dropdown.Item>
                    <Dropdown.Item onClick = {changeToCN}>简体中文</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item className = "phone-num">
             +603-2142 2577
        </Nav.Item>
        </Container>
    </Navbar> 
);
}
 
export default Navibar;