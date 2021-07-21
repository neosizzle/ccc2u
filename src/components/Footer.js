import '../styles/footer.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Footer = () => {
    return (
        <div>
            {/* Grid container */}
            <Container>
                    <Row>
                        <Col lg = {6} md = {12} className = "mb-4 mb-md-0 p-5">
                            <h5>Contact Us</h5>
                            <p>
                                Address: D-01-04 Southgate Commercial Centre, No. 2, Jalan Dua off Jalan Chan Sow Lin, 55200 Kuala Lumpur, Malaysia
                            </p>
                            <p>
                                Tel: +603-2142 2577
                            </p>
                            <p>
                                Email: enquiry@ccc2u.com
                            </p>
                        </Col>
                        <Col lg = {3} md = {6} className = "mb-4 mb-md-0 p-5">
                            <h5>Portals</h5>
                            <Button variant="outline-secondary" size="md" className = "m-2">Member Portal</Button>
                            <Button variant="outline-secondary" size="md" className = "m-2">Distributor Portal</Button>
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