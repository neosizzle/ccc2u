//import assets
import '../../styles/milestone.scss'

//hooks
import { useState} from 'react';
import classNames from 'classnames';


//import components
import HorizontalTimeline from 'react-horizontal-timeline'
import Spinner from 'react-bootstrap/Spinner'

//dummy data
import data from "../../data/timeline-dummy"

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
                <img className = "timeline-img" src = {data[value].img} alt = "img"></img>
                <h1>{currLang === "EN"? data[value].key: data[value].key_cn}</h1>
                <p>
                {currLang === "EN"? data[value].key_content: data[value].key_content_cn}
                </p> 
             </div>
                
        </div>
     );
}
 
export default Background;