
//import components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//localization
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    EN:{
    },
    CN: {
    }
   });

const Team = ({currLang, data}) => {
    strings.setLanguage(currLang)
    return (  
        <div className = "team-container">
                <Row>
                    <Col lg = {6} md = {12}>
                        <img className = "team-portrait" src = {`${process.env.REACT_APP_ADMIN_URL}${data.portrait.formats.large.url}`} alt = "exec"></img>
                    </Col>

                    <Col lg = {6} md = {12}>
                        <h1>{currLang === "EN"? data.position : data.position_cn}</h1>
                        <p><span className = "bold">{currLang === "EN"? data.name : data.name_cn}</span> {currLang === "EN"? data.description : data.description_cn}</p>
                    </Col>
                </Row>
            </div>
    );
}
 
export default Team;