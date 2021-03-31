form = document.getElementById("enquiry-form")
feedback = document.getElementById("email-feedback")
feedbackContainer = document.getElementById("email-feedback-container")
feedbackStatus = document.getElementById("email-feedback-status")
feedbackMessage = document.getElementById("email-feedback-message")
feedbackBtn = document.getElementById("email-feedback-button")


//add form listner to send email twhen submitted
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
    //declare request oprions
    url = '/sendEmail'
    params = {
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(messageObj),
        method : "POST"
    }

    //send post request to server
    fetch(url , params)
    .then(response => response.json())//parse response into readable json
    .then((data)=>{
        //error handling
        if(data.error){
            feedbackStatus.textContent = 'Oops!'
            feedbackMessage.innerHTML = ` Something wrong happened! We are very sorry.<br> Code : ${data.error.code}`
            feedback.className = "jumbotron email-feedback bg-white failure showFb"
            feedbackContainer.className = 'email-feedback-container d-flex justify-content-center showFb' // show feedback div
        }else{
            feedbackStatus.textContent = 'Success!'
            feedbackMessage.innerHTML = ` Thank you! We will reach out to you as soon as possible. `
            feedback.className = "jumbotron email-feedback bg-white success showFb"
            feedbackContainer.className = 'email-feedback-container d-flex justify-content-center showFb'  // show feedback div
            
        }
    })
    .catch(
        (error)=>{

        }
    )




} )

//add btn event listener to close the feedback div
feedbackBtn.addEventListener("click", (event)=>{
    feedback.className = "jumbotron email-feedback bg-white hide"
    feedbackContainer.className = 'email-feedback-container d-flex justify-content-center hide' // close feedback div
})