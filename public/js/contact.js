form = document.getElementById("enquiry-form")
enquiryType = document.getElementById("enquiryType")

const myFunc = ()=>{



    if(enquiryType.value == 'default'){
        return alert("enquiry type cant be default")
    }

    alert("form succ")
}

form.addEventListener("submit" , myFunc() )