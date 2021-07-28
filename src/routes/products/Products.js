//import assets
import logo from '../../assets/logo.png';
import '../../styles/products.scss'

//utils
import axios from 'axios';

//hooks
import { useState, useLayoutEffect, useEffect } from 'react';

//import components
import {Link} from "react-router-dom";
import Navibar from '../../components/Navibar'
import Footer from '../../components/Footer'
import Product from '../../components/Products/Product'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

//cookies
import Cookies from 'universal-cookie';

//dummy data
//import data from '../../data/product-dummy'

//localization
import LocalizedStrings from 'react-localization';

const cookies = new Cookies();
let strings = new LocalizedStrings({
    EN:{
      about:"About us",
      prod_serv:"Products and services",
      promos:"Promotions",
      contact:"Contact Us",
      bg:"Background and Aspiration",
      team:"Our Team",
      milestone:"Milestone"
    },
    CN: {
      about:"关于我们",
      prod_serv:"产品与服务",
      promos:"促销",
      contact:"联络我们",
      bg:"背景与理想",
      team:"团队",
      milestone:"旅程碑"
    }
   });

//function that updates the size state on windows resize 
const useWindowSize = ()=>{
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Products = () => {

    //declare states
    //width and height stands for the width n height of screen
    //shownav is a state where it yields wether or not the navbar should show or not
    const [width, height] = useWindowSize();
    const [showNav, setShowNav] = useState(width <= 768? 1: 0)

    //useeffect hook to set the shownav to the appropriate value depends on viewport sidth
    useEffect(() => {
        setShowNav(width <= 768? 1: 0)
    }, [width])
  
    //function that sets shownav to 1 if scrollewd down and 0 otherwise
    //DOES NOT APPLY FOR MOBILE DEVICES
    const scrollNavbar = ()=>{
        if (window.innerWidth > 768)
        {
            if (window.scrollY > 150)
            {
                setShowNav(1)
            }
            else
            {
                setShowNav(0)
            }
        }
    }

    //use effect hook to handle scroll activity
    useEffect(() => {
        window.addEventListener('scroll',scrollNavbar)
        return () => {
            window.removeEventListener('scroll', scrollNavbar)
        }
    }, [])

    //state to store the current lang
    const [currLang, setCurrLang] = useState(cookies.get('lang') ? cookies.get('lang') : strings.getLanguage())
    strings.setLanguage(currLang)

    //use effect hook to get data from cms
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ADMIN_URL}/products`)
        .then((res)=>{
            setData(res.data);
            //console.log(`${process.env.REACT_APP_ADMIN_URL}${data[0].cover_img.formats.large.url}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return ( 
        <div>
            {/* Start main header */}
            {
                //conditional rendering (renders the div if condition fufills)
                width > 768? <div className = "init-nav-container-rel">
                <div className = "brand-container">
                    <Link to = "/" className = "navbar-brand-container"> <img src = {logo} className = "navbar-brand" alt = "logo"/></Link>
                </div>
                <div className = "init-nav-list">
                    <Link to = "/about" className="init-nav-link-custom nav-link-ltr">{strings.about}</Link>
                    <Link to = "/products" className="init-nav-link-custom nav-link-ltr">{strings.prod_serv}</Link>
                    <Link to = "/promotions" className="init-nav-link-custom nav-link-ltr">{strings.promos}</Link>
                    <Link to = "/contact" className="init-nav-link-custom nav-link-ltr">{strings.contact}</Link>
    
                </div>
            </div> : null
            }
            {/* End main header */}

            {/* Start navbar */}
            {/* conditional rendering (renders the Navibar if condition fufills) */}
            {showNav === 1? <Navibar currLang = {currLang} setCurrLang = {setCurrLang}/>: null}
            {/* End Navbar */}

            {/* Start tabs */}
            <div className = "tabs-container">
                <Tab.Container defaultActiveKey={0}>
                    <Row className = "pills-container">
                        <Col sm={3} className = "bg-light p-1">
                        <Nav variant="pills" className="flex-column">
                            {
                                data[0] ?
                                data.map((data, idx)=>{
                                    return (
                                        <Nav.Item key = {idx} className = "pills">
                                         <Nav.Link eventKey={idx}>{currLang === "EN" ? data.title: data.title_cn}</Nav.Link>
                                        </Nav.Item>
                                    )
                                }) :
                                <Spinner animation="border" role="status"/>
                            }
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            {
                                data[0] ?
                                data.map((data, idx)=>{
                                    return (
                                        <Tab.Pane key = {idx} eventKey={idx}>
                                            <Product currLang = {currLang} data = {data}/>
                                        </Tab.Pane>
                                    )
                                }) :
                                <Spinner animation="border" role="status"/>
                            }
      
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            {/* End Tabs */}

            {/* Start Footer */}
            <Footer currLang = {currLang}/>
            {/* End Footer */}

        </div>
     );
}
 
export default Products;