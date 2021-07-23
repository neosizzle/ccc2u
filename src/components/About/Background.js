//import assets
import '../../styles/background.scss'

//hooks

//import components

//dummy data
import data from "../../data/dummy"

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
                <div className = "d-flex justify-content-center">
                    <img className = "background-img" src = "https://ccc2u.com/images/products/Background-min.png" alt = "background"/>
                </div>
                <div className = "writeup-container">
                    <h2>{currLang === "EN" ? data.key : data.key_cn}</h2>
                    <p>
                        {currLang === "EN"? data.key_content : data.key_content_cn}
                    </p>
                </div>
        </div>
     );
}
 
export default Background;