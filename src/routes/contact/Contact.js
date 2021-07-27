//import assets
import logo from '../../assets/logo.png';
import gmaps from '../../assets/icons/google-maps.png'
import waze from '../../assets/icons/waze.png'
import '../../styles/contact.scss'

//hooks
import { useState, useLayoutEffect, useEffect } from 'react';

//import components
import {Link} from "react-router-dom";
import Navibar from '../../components/Navibar'
import Footer from '../../components/Footer'
import ContactCard from '../../components/Contact/ContactCard';
import EmailCard from '../../components/Contact/EmailCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//cookies
import Cookies from 'universal-cookie';

//dummy data
import data from '../../data/product-dummy'

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
      milestone:"Milestone",
      findus : "Find us!",
    },
    CN: {
      about:"关于我们",
      prod_serv:"产品与服务",
      promos:"促销",
      contact:"联络我们",
      bg:"背景与理想",
      team:"团队",
      milestone:"旅程碑",
      findus : "我们的地点",
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

            {/* Start Contact and Email */}
            <div className = "contact-container">
                <Row>
                    <Col className = "d-flex justify-content-center align-items-center" lg = {6} md = {12}>
                        <ContactCard currLang = {currLang}/>
                    </Col>

                    <Col className = "d-flex justify-content-center align-items-center" lg = {6} md = {12}>
                        <EmailCard currLang = {currLang}/>
                    </Col>
                </Row>
            </div>
            {/* End Contact and Email */}

            {/* Start google maps */}
            <div>
                <div className = "map-container d-flex flex-column justify-content-center align-tems-center">
                    <h2 className = "find-us">
                        {strings.findus}
                    </h2>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8863508882887!2d101.7086439641122!3d3.124743304175185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc361c4e354c67%3A0xdf9d07805ca3f5e2!2sSouthgate%20Commercial%20Center!5e0!3m2!1sen!2smy!4v1627365394813!5m2!1sen!2smy"
                    frameBorder="0"
                    style={{ border: 0, height : "70vh", width : "100%" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    />
                </div>
                <div className = "links-container d-flex justify-content-center align-tems-center">
                    <a target="_blank" href = "https://www.google.com.my/maps/place/CCC+Sales+Gallery/@3.1247433,101.708644,17z/data=!4m8!1m2!2m1!1sCCC+Sales+Gallery,+D-01-04+Southgate+Commercial+Centre,+No.+2,+Jalan+Dua,+Off+Jalan+Chan+Sow+Lin,+Chan+Sow+Lin,+55200+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur,+Malaysia!3m4!1s0x31cc37128b68b151:0x2cfd4a1d1155cec!8m2!3d3.124959!4d101.7109859">
                        <img src = {gmaps} alt = "gmaps"></img>
                    </a>
                    <a target="_blank" href = "https://www.waze.com/live-map/directions/malaysia/wilayah-persekutuan-kuala-lumpur/kuala-lumpur/ccc-sales-gallery?utm_source=waze_website&utm_campaign=waze_website&utm_medium=website_menu&to=place.ChIJUbFoixI3zDER7FwV0aHUzwI">
                        <img src = {waze} alt = "waze"></img>
                    </a>
                </div>
            </div>
            {/* End google maps */}

            {/* Start navbar */}
            {/* conditional rendering (renders the Navibar if condition fufills) */}
            {showNav === 1? <Navibar currLang = {currLang} setCurrLang = {setCurrLang}/>: null}
            {/* End Navbar */}

      

            {/* Start Footer */}
            <Footer currLang = {currLang}/>
            {/* End Footer */}

        </div>
     );
}
 
export default Products;