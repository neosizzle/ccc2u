//import assets
import '../../styles/milestone.scss'

//utils
import axios from 'axios';

//hooks
import { useState, useEffect } from 'react';
import classNames from 'classnames';


//import components
import HorizontalTimeline from 'react-horizontal-timeline'
import Spinner from 'react-bootstrap/Spinner'

//dummy data
//import data from "../../data/timeline-dummy"

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
    
    //values for timeline
    const [value, setValue] = useState(0)
    const [prev, setPrev] = useState(0)

    //animation state for timeline
    const [animate, setAnimate] = useState(false)

    //weird bug for the horizontal timeline component that only renders on resize
    const [width, setWidth] = useState("0");

    //use effect hook to get data from cms
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ADMIN_URL}/milestones`)
        .then((res)=>{
            setData(res.data);
            //console.log(res.data);
            //console.log(`${process.env.REACT_APP_ADMIN_URL}${data[0].portrait.formats.large.url}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    //function to extract dates and return an array
    const populateDates = (data)=>{
        const res = [];
        let i = 0;
        while(data[i])
        {
            res[i] = data[i].date
            i++;
        }
        return res;
    }
    const DATES = populateDates(data);

    return ( 
        <div onMouseOver = {() => setWidth("80%")}>
            <div style={{ width: width, height: "100px", margin: "0 auto" }}>
                {width !== "0"? 
                <HorizontalTimeline
                    index={value}
                    styles={{ background: "#FFFFFF", outline: "rgb(214, 212, 107)", foreground: "rgb(214, 212, 107)" }}
                    indexClick={(index) => {
                        setValue(index);
                        setPrev(value);
                        setAnimate(!animate)
                    }}
                    values={DATES}
                    /> :<Spinner  animation="border" role="status"/> }
            </div>
      
            <div className={classNames("timeline-content-container", "text-center", (value >= prev)? 
            (animate? "timeline-animate-l2r" : "timeline-animate-l2r-2") 
            : (animate? "timeline-animate-r2l" : "timeline-animate-r2l-2"))}>
                {
                    data[0] ? 
                    <img className = "timeline-img" src = {`${process.env.REACT_APP_ADMIN_URL}${data[value].cover_img.formats.large.url}`} alt = "img"></img> :
                    <Spinner/>
                }
                <h1>
                    {
                        data[0] ?
                        (currLang === "EN"? data[value].title : data[value].title_cn) : 
                        <Spinner/>
                    }
                </h1>
                {
                        data[0] ?
                        (currLang === "EN"? data[value].content : data[value].content_cn) : 
                        <Spinner animation="border" role="status"/>
                }
             </div>
                
        </div>
     );
}
 
export default Background;