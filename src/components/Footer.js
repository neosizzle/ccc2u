//assets
import '../styles/footer.scss'

//components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

//localization
import LocalizedStrings from 'react-localization';
import { string } from 'prop-types'
let strings = new LocalizedStrings({
    EN:{
        contact:"Contact Us",
        addr:"Address:",
        tel:"Tel:",
        email:"Email:",
        protals:"Portals",
        member:"Member Portal",
        distrib:"Distributor Portal",
    },
    CN: {
        contact:"联络我们",
        addr:"地址：",
        tel:"电话：",
        email:"电邮：",
        protals:"网站",
        member:"会员登入",
        distrib:"代理人登入",
    }
   });

const Footer = ({currLang}) => {
    strings.setLanguage(currLang)
    return (
        <div>
            {/* Grid container */}
            <Container>
                    <Row>
                        <Col lg = {6} md = {12} className = "mb-4 mb-md-0 p-5">
                            <h5>{strings.contact}</h5>
                            <p>
                                {strings.addr} D-01-04 Southgate Commercial Centre, No. 2, Jalan Dua off Jalan Chan Sow Lin, 55200 Kuala Lumpur, Malaysia
                            </p>
                            <p>
                                {strings.tel} +603-2142 2577
                            </p>
                            <p>
                                {string.email} enquiry@ccc2u.com
                            </p>
                        </Col>
                        <Col lg = {3} md = {6} className = "mb-4 mb-md-0 p-5">
                            <h5>{strings.protals}</h5>
                            <Button variant="outline-secondary" size="md" className = "m-2">{strings.member}</Button>
                            <Button variant="outline-secondary" size="md" className = "m-2">{strings.distrib}</Button>
                        </Col>
                    </Row>
            </Container>

            {/* Copyright container */}
            <div className = "copyright">
                © 2020 Copyright: City Centre Columbarium
            </div>
        </div>
      );
}
 
export default Footer;