

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
                        <img className = "team-portrait" src = "https://ccc2u.com/images/team/exec-min.png" alt = "exec"></img>
                    </Col>

                    <Col lg = {6} md = {12}>
                        <h1>{currLang === "EN"? data.key : data.key_cn}</h1>
                        <p><span className = "bold">{currLang === "EN"? data.key : data.key_cn}</span> {currLang === "EN"? data.key_content : data.key_content_cn}</p>
                    </Col>
                </Row>
            </div>
    );
}
 
export default Team;