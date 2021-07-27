//assets
import '../../styles/card.scss'

//hooks
import { useState } from 'react'

//utils
import axios from 'axios';

///components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
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
        submit : "Submit",
        fieldsReq : "All fields are required!",
        failMsg : "An error occured! Please try again",
        successMsg: "Message sent succesfully!"
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
        submit : "发送",
        fieldsReq : "各个领域都需要!",
        failMsg : "发生错误！请再试一次",
        successMsg: "消息发送成功！"
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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    //feedback state
    //-2 - missing fields
    //-1 - message failed to send
    // 0 no feedback
    // 1 success
    const [feedback, setFeedback] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    //function to handle submit
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setIsLoading(true);

        //check required values
        if (!name || !email || !subject || !message)
        {
            setFeedback(-2);
            setIsLoading(false);
            return ;
        }

        //emailjs
        var payload = {
            service_id: process.env.REACT_APP_EMAILJS_SERVICEID,
            template_id: process.env.REACT_APP_EMAILJS_TEMPLATEID,
            user_id: process.env.REACT_APP_EMAILJS_USERID,
            template_params: {
                'enquiry' : enquiry.label,
                'name': name,
                'email': email,
                'subject' : subject,
                'message' : message
            }
        };
        axios.post("https://api.emailjs.com/api/v1.0/email/send", payload)
        .then((response)=>{
            //feedback
            setEnquiry(options[0])
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setIsLoading(false)
            setFeedback(1)
        })
        .catch((err)=>{
            console.log(err)
            //feedback
            setIsLoading(false)
            setEnquiry(options[0])
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setFeedback(-1)
        })
    }

    return ( 
        <div className = "card">
            <div className = "card-cover">
                <h1>{strings.enquiry}</h1>
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
                                <Form.Control 
                                type="text"
                                placeholder={strings.name} 
                                value = {name}
                                onChange = {(event)=>{
                                    setName(event.target.value)
                                }}/>
                            </div>
                        </div>
                        </Col>
                        <Col lg = {6} md = {6}>
                        <div>
                            <div className="mb-3 input-col-2">
                                <Form.Label>{strings.email}</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder={strings.email} 
                                value = {email}
                                onChange = {(event)=>{
                                    setEmail(event.target.value)
                                }}/>
                            </div>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <div>
                            <Form.Group className="mb-3">
                                <Form.Label>{strings.subject}</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder={strings.subject}
                                value = {subject}
                                onChange = {(event)=>{
                                    setSubject(event.target.value)
                                }}/>
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
                            value = {message}
                            onChange = {(event)=>{
                                    setMessage(event.target.value)
                            }}
                            />
                        </div>
                    </Row>
                    <div className = "mt-2 d-flex align-items-center justify-content-between" >
                        <Button variant="primary" type="submit" onClick = {handleSubmit}>
                            {strings.submit}
                        </Button>
                        <div>
                            {
                                isLoading ?
                                 <Spinner animation="border" size="sm" /> :
                                 null
                            }
                            {
                                feedback === -2? 
                                    <p className = "text-danger"> {strings.fieldsReq}</p> :
                                feedback === -1?
                                    <p className = "text-danger"> {strings.failMsg} </p> :
                                feedback === 1?
                                    <p className = "text-success"> {strings.successMsg} </p> :
                                null
                            }
                        </div>
                    </div>
                </Form>
               </div>
            </div>
    </div>
     );
}
 
export default EmailCard;