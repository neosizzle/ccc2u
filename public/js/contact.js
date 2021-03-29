form = document.getElementById("enquiry-form")



form.addEventListener("submit" , (event)=>{

    //prevent page from refreshing
    event.preventDefault()

    //get values from the form
    enquiryType = document.getElementById("enquiryType").value
    nameInput = document.getElementById("nameInput").value
    emailInput = document.getElementById("emailInput").value
    subjectInput = document.getElementById("subjectInput").value
    messageInput = document.getElementById("messageInput").value


    //create message obj to send to server
    messageObj = {
        "enquiryType" : enquiryType,
        "name" : nameInput,
        "email" : emailInput,
        "subject" : subjectInput,
        "message" : messageInput
    }
    
    //validate enquiry type
    if(enquiryType == 'default'){
        return alert("enquiry type cant be default")
    }


    //send post request to server

    url = '/sendEmail'
    params = {
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(messageObj),
        method : "POST"
    }

    fetch(url , params)
    .then(response => response.json())
    .then((data)=>{
        if(data.error){
            alert(data.error)
        }else{
            alert("succ")
        }
    })




} )