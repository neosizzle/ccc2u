//import assets
import logo from '../../assets/logo.png';
import '../../styles/home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//hooks
import { useState, useLayoutEffect, useEffect } from 'react';

//import components
import {Link} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe'
import Navibar from '../../components/Navibar'
import Footer from '../../components/Footer'

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
                    <h1>Lorem Ipsum</h1>
                    <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus arcu nunc, volutpat convallis lorem venenatis vel. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae ultrices dolor. Cras egestas ante vitae sodales euismod. Etiam in sapien quis augue commodo lobortis. Aliquam gravida vehicula nisi vitae dictum. Donec consequat turpis eu odio maximus aliquam. Nulla finibus hendrerit mauris, at porta leo semper non. Maecenas at orci eget lorem aliquet congue et ut augue. Duis arcu ante, scelerisque ac augue sed, interdum vehicula velit.
                    Fusce commodo sem et odio auctor, id congue enim vehicula. Ut suscipit nisl a orci malesuada pretium. Suspendisse potenti. Praesent venenatis blandit risus, at blandit eros auctor tristique. Aenean sagittis ultricies lorem eu semper. Fusce nec eros quis libero vestibulum pulvinar id fringilla turpis. Integer laoreet tellus a rhoncus convallis. Nulla eget orci eget neque consequat accumsan. Etiam tincidunt id sapien non ultricies. Praesent tristique sollicitudin ex ut auctor. Integer consequat sed ante in posuere. Fusce at bibendum urna.
                    Fusce commodo sem et odio auctor, id congue enim vehicula. Ut suscipit nisl a orci malesuada pretium. Suspendisse potenti. Praesent venenatis blandit risus, at blandit eros auctor tristique. Aenean sagittis ultricies lorem eu semper. Fusce nec eros quis libero vestibulum pulvinar id fringilla turpis. Integer laoreet tellus a rhoncus convallis. Nulla eget orci eget neque consequat accumsan. Etiam tincidunt id sapien non ultricies. Praesent tristique sollicitudin ex ut auctor. Integer consequat sed ante in posuere. Fusce at bibendum urna.
                    </p>
                </div>
            </div>
            {/* End CCC intro 1 */}

            {/* Start CCC intro 2 */}
            <div className = "intro-2-container">
                <div className = "intro-2-writeup">
                    <h1>Lorem Ipsum</h1>
                    <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus arcu nunc, volutpat convallis lorem venenatis vel. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae ultrices dolor. Cras egestas ante vitae sodales euismod. Etiam in sapien quis augue commodo lobortis. Aliquam gravida vehicula nisi vitae dictum. Donec consequat turpis eu odio maximus aliquam. Nulla finibus hendrerit mauris, at porta leo semper non. Maecenas at orci eget lorem aliquet congue et ut augue. Duis arcu ante, scelerisque ac augue sed, interdum vehicula velit.
                    </p>
                </div>
            </div>
            {/* End CCC intro 2 */}

            {/* Start Video */}
            <div className = "video-title"><h1>Lorem Ipsum</h1></div>
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