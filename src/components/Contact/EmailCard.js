//assets
import '../../styles/card.scss'

//hookd
import { useState } from 'react'

///components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'

//localization
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    EN:{
        enquiry : "Enquiry Form",
        general : "General Enquiries",
        niches : "Niches",
        memtabs : "Memorial Tablets and Plates",
        agent : "Intrested to become an Agent",
        name : "Name",
        email : "Email",
        subject : "Subject",
        message : "Message",
        submit : "Submit"
    },
    CN: {
        enquiry : "询问",
        general : "一般查询",
        niches : "骨灰塔",
        memtabs : "神主牌位和万佛位",
        agent : "代理人查询",
        name : "姓名",
        email : "电邮",
        subject : "主题",
        message : "讯息",
        submit : "发送"
    }
   });

const EmailCard = ({currLang}) => {
    strings.setLanguage(currLang)

    //init select options
    const options = [
        { value: 'general', label: strings.general },
        { value: 'niches', label: strings.niches },
        { value: 'memtabs', label: strings.memtabs },
        { value: 'agent', label: strings.agent }
    ];


    //form control states
    const [enquiry, setEnquiry] = useState(options[0])

    return ( 
        <div className = "card">
            <div className = "card-cover">
                <h1>{strings.enquiry} {enquiry? enquiry.label: null}</h1>
            </div>
            <div className = "card-content">
               <div className = "form-container">
               <Form>
                    <Row>
                        
                        <Form.Group className="mb-3">
                            <Select
                            defaultValue={enquiry}
                            onChange = {setEnquiry}
                            options={options} />

                        </Form.Group>
                        
                    </Row>

                    <Row>
                        <Col lg = {6} md= {6}>
                        <div>
                            <div className="mb-3 input-col-1">
                                <Form.Label>{strings.name}</Form.Label>
                                <Form.Control type="text" placeholder={strings.name} />
                            </div>
                        </div>
                        </Col>
                        <Col lg = {6} md = {6}>
                        <div>
                            <div className="mb-3 input-col-2">
                                <Form.Label>{strings.email}</Form.Label>
                                <Form.Control type="email" placeholder={strings.email} />
                            </div>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <div>
                            <Form.Group className="mb-3">
                                <Form.Label>{strings.subject}</Form.Label>
                                <Form.Control type="text" placeholder={strings.subject} />
                            </Form.Group>
                        </div>
                    </Row>

                    <Row>
                        <div>
                        <Form.Label>{strings.message}</Form.Label>
                            <Form.Control
                            as="textarea"
                            placeholder={strings.message}
                            style={{ height: '100px' }}
                            />
                        </div>
                    </Row>
                    <Button className = "mt-2" variant="primary" type="submit">
                        {strings.submit}
                    </Button>    
                </Form>
               </div>
            </div>
    </div>
     );
}
 
export default EmailCard;