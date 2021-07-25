//import assets
import '../../styles/promotions.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//hooks
import { useState, useLayoutEffect, useEffect } from 'react';

//import components
import Navibar from '../../components/Navibar'
import Footer from '../../components/Footer'
import ComingSoon from '../../components/ComingSoon'

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



const Promotions = () => {

    //state to store the current lang
    const [currLang, setCurrLang] = useState(cookies.get('lang') ? cookies.get('lang') : strings.getLanguage())
    strings.setLanguage(currLang)

    return ( 
        <div>

            {/* Start navbar */}
           <Navibar currLang = {currLang} setCurrLang = {setCurrLang}/>
            {/* End Navbar */}

            <ComingSoon currLang = {currLang}/>

            {/* Start Footer */}
            <Footer currLang = {currLang}/>
            {/* End Footer */}

        </div>
     );
}
 
export default Promotions;