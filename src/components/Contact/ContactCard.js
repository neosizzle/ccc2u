//assets
import '../../styles/card.scss'
import callIcon from '../../assets/icons/call.png'
import locationIcon from '../../assets/icons/location.png'
import whatsappIcon from '../../assets/icons/whatsapp.png'

//localization
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    EN:{
        contact : "Talk to us!"
    },
    CN: {
        contact : "联络"
    }
   });

const ContactCard = ({currLang}) => {
    strings.setLanguage(currLang)
    return ( 
        <div className = "card">
            <div className = "card-cover">
                <h1>{strings.contact}</h1>
            </div>
            <div className = "card-content">
                <div className = "contact-details">
                    <img src = {callIcon} alt = "call"/> +60 3-2142 2577
                </div>
                <div className = "contact-details">
                    <img src = {whatsappIcon} alt = "call"/> <a href = "https://wa.me/601163392177">wa.me/601163392177</a>
                </div>
                <div className = "contact-details">
                    <img src = {locationIcon} alt = "location"/> CCC Sales Gallery,
                        D-01-04 Southgate Commercial Centre,
                        No. 2, Jalan Dua off Jalan Chan Sow Lin,
                        55200 Kuala Lumpur, Malaysia
                </div>
            </div>
        </div>
     );
}
 
export default ContactCard;