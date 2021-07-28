//import assets
import logo from '../../assets/logo.png';
import '../../styles/home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//hooks
import { useState, useLayoutEffect, useEffect } from 'react';

//utils
import axios from 'axios';

//import components
import {Link} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe'
import Navibar from '../../components/Navibar'
import Footer from '../../components/Footer'
import Spinner from 'react-bootstrap/Spinner'

//cookies
import Cookies from 'universal-cookie';

//dummy data
//import data from "../../data/dummy"

//localization
import LocalizedStrings from 'react-localization';

const cookies = new Cookies();
let strings = new LocalizedStrings({
    EN:{
      about:"About us",
      prod_serv:"Products and services",
      promos:"Promotions",
      contact:"Contact Us"
    },
    CN: {
      about:"关于我们",
      prod_serv:"产品与服务",
      promos:"促销",
      contact:"联络我们"
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

const Home = () => {

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
        axios.get(`${process.env.REACT_APP_ADMIN_URL}/Homepage-writeups`)
        .then((res)=>{
            setData(res.data);
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
                width > 768? <div className = "init-nav-container">
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

            {/* Start Carousel */}
            <Carousel
            showThumbs = {false} 
            showStatus = {false} 
            showArrows = {false} 
            autoFocus={true} 
            autoPlay = {true} 
            infiniteLoop = {true}  
            interval = {3500}>
                <div>
                    <img src="https://ccc2u.com/images/products/mainlobby-min.jpg" alt = "Carousel img"/>
                </div>
                <div>
                    <img src="https://ccc2u.com/images/products/airal-view-min.png" alt = "Carousel img"/>
                </div>
                <div>
                    <img src="https://ccc2u.com/images/products/redbench-min.jpg" alt = "Carousel img"/>
                </div>
            </Carousel>
            {/* End Carousel */}
                {/* <h1>currLang = {currLang} output : {currLang === "EN" ? data.key : data.key_cn} cookie : {cookies.get('lang')}</h1> */}
            {/* Start CCC intro 1 */}
            <div className = "intro-1-container">
                <div className = "intro-1-writeup">
                    <h1>
                        {
                            data[0] ?
                            (currLang === "EN"? data[0].title : data[0].title_cn) : 
                            <Spinner/>
                        }
                    </h1>
                    <p>
                        {
                            data[0] ?
                            (currLang === "EN"? data[0].content : data[0].content_cn) : 
                            <Spinner/>
                        }
                    </p>
                </div>
            </div>
            {/* End CCC intro 1 */}

            {/* Start CCC intro 2 */}
            <div className = "intro-2-container">
                <div className = "intro-2-writeup">
                <h1>
                    {
                        data[0] ?
                        (currLang === "EN"? data[1].title : data[1].title_cn) : 
                        <Spinner/>
                    }  
                </h1>
                    <p>
                        {
                            data[0] ?
                            (currLang === "EN"? data[1].content : data[1].content_cn) : 
                            <Spinner/>
                        }
                    </p>
                </div>
            </div>
            {/* End CCC intro 2 */}

            {/* Start Video */}
            <div className = "video-title">
                <h1>
                    {
                            data[0] ?
                            (currLang === "EN"? data[2].title : data[2].title_cn) : 
                            <Spinner/>
                    }
                </h1>
            </div>
            <div className = "video-container">
                <Iframe
                url="https://www.youtube.com/embed/i5gKDdUgbLw"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                />
            </div>
            {/* End video */}

            {/* Start Footer */}
            <Footer currLang = {currLang}/>
            {/* End Footer */}

        </div>
     );
}
 
export default Home;