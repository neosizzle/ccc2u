//import assets
import '../../styles/teams.scss'

//utils
import axios from 'axios';

//hooks
import { useState, useEffect } from 'react';

//import components
import Team from './Team'
import Spinner from 'react-bootstrap/Spinner'

//dummy data
//import data from "../../data/team-dummy"

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
        axios.get(`${process.env.REACT_APP_ADMIN_URL}/Our-teams`)
        .then((res)=>{
            setData(res.data);
            //console.log(res.data);
            //console.log(`${process.env.REACT_APP_ADMIN_URL}${data[0].portrait.formats.large.url}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return ( 
        <div>
            {
                data[0]?
                    data.map((data, idx)=>
                    {
                        return <Team currLang = {currLang} data = {data} key = {idx}></Team>
                    })
                    :
                    <Spinner animation="border" role="status"/>
            }
        </div>
     );
}
 
export default Background;