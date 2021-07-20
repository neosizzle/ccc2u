//import assets
import logo from '../../assets/logo.png';
import '../../styles/home.scss'

//import components
import {
  Link
} from "react-router-dom";

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
        </div>
     );
}
 
export default Home;