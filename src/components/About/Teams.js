//import assets
import '../../styles/teams.scss'

//hooks

//import components
import Team from './Team'

//dummy data
import data from "../../data/team-dummy"

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

    return ( 
        <div>
            {
                data.map((data, idx)=>
                {
                    return <Team currLang = {currLang} data = {data} key = {idx}></Team>
                })
            }
        </div>
     );
}
 
export default Background;