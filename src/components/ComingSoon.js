import '../styles/comingsoon.scss'

//localization
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    EN:{
        website:"WEBSITE",
        cs:"COMING SOON",
    },
    CN: {
        website:"网页",
        cs:"即将到来",
    }
   });



const ComingSoon = ({currLang}) => {
    strings.setLanguage(currLang)
    return ( 
        <div className = "d-flex flex-column justify-content-center align-items-center coming-soon-container">
        
            <h1>{strings.website}</h1>
            <h1>{strings.cs}</h1>
        
        </div>
     );
}
 
export default ComingSoon;