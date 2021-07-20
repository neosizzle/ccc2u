//import assets
import logo from '../../assets/logo.png';
import '../../styles/home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//import components
import {Link} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return ( 
        <div>
            <div className = "init-nav-container">
                <div className = "brand-container">
                    <img src = {logo} className = "navbar-brand" alt = "logo"></img>
                </div>
                <div className = "init-nav-list">
                    <Link to = "/" className="nav-link nav-link-ltr">Home</Link>
                    <Link to = "/" className="nav-link nav-link-ltr">Home</Link>
                    <Link to = "/" className="nav-link nav-link-ltr">Home</Link>
                    <Link to = "/" className="nav-link nav-link-ltr">Home</Link>
    
                </div>
            </div>
            <Carousel
            showThumbs = {false} 
            showStatus = {false} 
            showArrows = {false} 
            autoFocus={true} 
            autoPlay = {true} 
            infiniteLoop = {true}  
            interval = {3500}>
                <div>
                    <img src="https://ccc2u.com/images/products/mainlobby-min.jpg" />
                </div>
                <div>
                    <img src="https://ccc2u.com/images/products/airal-view-min.png" />
                </div>
                <div>
                    <img src="https://ccc2u.com/images/products/redbench-min.jpg" />
                </div>
            </Carousel>
        </div>
     );
}
 
export default Home;