
function validateStep1() {

    let nameError= document.getElementById("name-error");
    let ageError= document.getElementById("age-error");



    let isValid = true ;

    if (document.firstform.Name.value === "" ) {

        nameError.textContent = "Please provide your name!";

        isValid = false ;

    }else {

        nameError.textContent = "";

    }

    if (document.firstform.age.value === "") {

        ageError.textContent = "Please provide your age!";

        isValid = false ;
        
    }else {

         ageError.textContent = "" ;
         
    }

    

    return isValid ;
}

function validateStep2() {

    let emailError= document.getElementById("email-error");
    let phoneError= document.getElementById("phone-error");

    let isValid = true ;

    if (document.firstform.email.value === "") {

        emailError.textContent = "Please provide your email!";

        isValid = false ;
        
    }else {

        emailError.textContent = "" ;
         
    }

    if (document.firstform.phone.value === "") {

        phoneError.textContent = "Please provide your phone!";

        isValid = false ;
        
    }else {

        phoneError.textContent = "" ;
         
    }


    return isValid ;
}

function validateStep3() {

    let feedbackError= document.getElementById("Feedback-error");

    let isValid = true ;

    if (document.firstform.feedback.value === "") {

        feedbackError.textContent = "Please provide your feedback!";

        isValid = false ;
        
    }else {

        feedbackError.textContent = "" ;
         
    }


    return isValid ;
}

function validateAll() {

    
    let name2 = document.getElementById("outputName").value;
    let age2 = document.getElementById("outputAge").value;
    let email2 = document.getElementById("outputEmail").value;
    let phone2 = document.getElementById("outputPhone").value;
    let feedback2 = document.getElementById("outputFeedback").value;



    let name2error = document.getElementById("name2-error");
    let age2error = document.getElementById("age2-error");
    let email2error = document.getElementById("email2-error");
    let phone2error = document.getElementById("phone2-error");
    let feedback2error = document.getElementById("feedback2-error");



   let isValid = true ;
    
if (name2 === "" ) {

    name2error.textContent = "Please provide your name!";

    isValid = false ;

}else {

    name2error.textContent = "";

}

if (age2 === "") {

    age2error.textContent = "Please provide your age!";

    isValid = false ;
    
}else {

    age2error.textContent = "" ;
     
}

if (email2 === "") {

    email2error.textContent = "Please provide your email!";

    isValid = false ;
    
}else {

    email2error.textContent = "" ;
     
}

if (phone2 === "") {

    phone2error.textContent = "Please provide your phone!";

    isValid = false ;
    
}else {

    phone2error.textContent = "" ;
     
}


if (feedback2 === "") {

    feedback2error.textContent = "Please provide your feedback!";

    isValid = false ;
    
}else {

    feedback2error.textContent = "" ;
     
}

return isValid ;


    
}


function getInputValue(){

    let name = document.getElementById("inputName").value ;
    let age = document.getElementById("ageInput").value ;
    let email = document.getElementById("inputEmail").value ;
    let phone = document.getElementById("inputPhone").value ;
    let feedback = document.getElementById("feedback").value ;

    let form = document.getElementById("form1").style.display="none";
    let display =  document.getElementById("display").style.display="block";

    document.getElementById("outputName").value = name ;
    document.getElementById("outputAge").value = age ;
    document.getElementById("outputEmail").value = email ;
    document.getElementById("outputPhone").value = phone ;
    document.getElementById("outputFeedback").value = feedback ;




}
 
function modify() {
    
    const elements = document.getElementsByClassName('del');
    
    for (let i = 0; i < elements.length; i++) {
        
        elements[i].removeAttribute('readonly');
        
    }

    

}

let current = 1;

function showSteps() {

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none" ;

    document.getElementById("step"+current).style.display = "block";

}


window.onload = function() {

    showSteps();

};


function nextStep(event) {

    event.preventDefault();

    if (current === 1) {

        
        if (validateStep1()) {
       
            current++ ;
            document.getElementById("progressBar").style="width: 33% ;" ;
    
            showSteps();
    
        }

    }else if (current === 2) {


        if (validateStep2()) {
       
            current++ ;
            document.getElementById("progressBar").style="width: 66% ;" ;
    
            showSteps();
    
        }
        
    }else if (current === 3) {

        if (validateStep3()) {

            document.getElementById("progressBar").style="width: 100% " ;

            getInputValue() ;
    
        }
    }

}

function backStep(event) {

    event.preventDefault();

    current-- ;

    showSteps();
    
}

function Success(event){

    event.preventDefault();

    if (validateAll()) {
        
        document.getElementById("success").style.display = "block";
    
        document.getElementById("display").style.display = "none";


    }
      

}

function goback(){

    location.reload();
    
};


