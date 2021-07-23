//import assets
import logo from '../../assets/logo.png';
import '../../styles/about.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//hooks
import { useState, useLayoutEffect, useEffect } from 'react';

//import components
import {Link} from "react-router-dom";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Navibar from '../../components/Navibar'
import Footer from '../../components/Footer'
import Background from '../../components/About/Background'
import Teams from '../../components/About/Teams'
import Milestone from '../../components/About/Milestone'

//cookies
import Cookies from 'universal-cookie';

//dummy data
import data from "../../data/dummy"

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

const About = () => {

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

    //state to store the current displayed content
    const [currContent, setCurrContent] = useState("bg")

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
                    <Link to = "/" className="init-nav-link-custom nav-link-ltr">{strings.prod_serv}</Link>
                    <Link to = "/" className="init-nav-link-custom nav-link-ltr">{strings.promos}</Link>
                    <Link to = "/" className="init-nav-link-custom nav-link-ltr">{strings.contact}</Link>
    
                </div>
            </div> : null
            }
            {/* End main header */}

            {/* Start navbar */}
            {/* conditional rendering (renders the Navibar if condition fufills) */}
            {showNav === 1? <Navibar currLang = {currLang} setCurrLang = {setCurrLang}/>: null}
            {/* End Navbar */}

            {/* start Tabs */}
            <div className = "tabs-container">
                <Tabs
                activeKey={currContent}
                onSelect={(k) => setCurrContent(k)}
                className="mb-3 tabs-custom"
                >
                <Tab eventKey="bg" title={strings.bg}>
                    <Background currLang = {currLang}/>
                </Tab>
                <Tab eventKey="team" title={strings.team}>
                    <Teams currLang = {currLang}/>
                </Tab>
                <Tab eventKey="milestone" title={strings.milestone}>
                    <Milestone currLang = {currLang}/>
                </Tab>
                </Tabs>
            </div>
            {/* end tabs */}

            {/* Start Footer */}
            <Footer currLang = {currLang}/>
            {/* End Footer */}

        </div>
     );
}
 
export default About;