//import assets
import '../../styles/background.scss'

//utils
import axios from 'axios';

//hooks
import { useState, useEffect } from 'react';

//import components
import Spinner from 'react-bootstrap/Spinner'

//dummy data
//import data from "../../data/dummy"

//localization
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    EN:{
    },
    CN: {
    }
   });


const Background = ({currLang}) => {
    strings.setLanguage(currLang)

    //use effect hook to get data from cms
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ADMIN_URL}/Background-aspirations`)
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
                <div className = "d-flex justify-content-center">
                    <img className = "background-img" src = {data[0] ? `${process.env.REACT_APP_ADMIN_URL}${data[0].cover_img.formats.large.url}` : null} alt = "background"/>
                </div>
                <div className = "writeup-container">
                    <h2>
                        {
                            data[0] ?
                            (currLang === "EN"? data[0].title : data[0].title_cn) : 
                            <Spinner animation="border" role="status"/>
                        }
                    </h2>
                        {
                            data[0] ?
                            (currLang === "EN"? data[0].content : data[0].content_cn) : 
                            <Spinner animation="border" role="status"/>
                        }
                </div>
        </div>
     );
}
 
export default Background;