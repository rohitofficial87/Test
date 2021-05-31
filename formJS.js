
const mainContainer = document.querySelector('.main-container');
 
const formParts = document.querySelectorAll('.form-part');
 
const buttonNext1 = document.getElementById('btnNext1');
const buttonNext2 = document.getElementById('btnNext2');
const buttonNext3 = document.getElementById('btnNext3');
const buttonSubmit = document.getElementById('submit');
 
const buttonBack1 = document.getElementById('btnBack1');
const buttonBack2 = document.getElementById('btnBack2');
const buttonBack3 = document.getElementById('btnBack3');
 
const progressBar = document.getElementById('progressBar');
 
const stepsText = document.querySelectorAll('small');
 
// NEXT BUTTONS
 
const formTwoTransition = () => {
    formParts[0].style.left = "-600px";
    formParts[1].style.left = "0";
    progressBar.style.width = '50%';
    stepsText[1].style.color = "#fff";
 
    if (window.matchMedia("(max-width: 600px)").matches) {
        /* The viewport is less than, or equal to, 600 pixels wide */
        mainContainer.style.height = '805px';
      } else {
        /* The viewport is greater than 600 pixels wide */
        mainContainer.style.height = '770px';
      }
}
 
const formThreeTransition = () => {
    formParts[1].style.left = "-600px";
    formParts[2].style.left = "0";
    progressBar.style.width = '75%';
    stepsText[2].style.color = "#fff";
 
    if (window.matchMedia("(max-width: 600px)").matches) {
        /* The viewport is less than, or equal to, 600 pixels wide */
        mainContainer.style.height = '1035px';
      } else {
        /* The viewport is greater than 600 pixels wide */
        mainContainer.style.height = '1000px';
      }
}
 
const formFourTransition = () => {
    formParts[2].style.left = "-600px";
    formParts[3].style.left = "0";
    progressBar.style.width = '100%';
    stepsText[3].style.color = "#fff";
    
    if (window.matchMedia("(max-width: 600px)").matches) {
        /* The viewport is less than, or equal to, 600 pixels wide */
        mainContainer.style.height = '950px';
      } else {
        /* The viewport is greater than 600 pixels wide */
        mainContainer.style.height = '810px';
      }
 
}
 
 
 
// BACK BUTTONS
 
buttonBack1.addEventListener('click', () => {
    formParts[0].style.left = "0";
    formParts[1].style.left = "600px";
    progressBar.style.width = '25%';
    stepsText[1].style.color = "#404040";
 
    if (window.matchMedia("(max-width: 600px)").matches) {
        /* The viewport is less than, or equal to, 600 pixels wide */
        mainContainer.style.height = '830px';
      } else {
        /* The viewport is greater than 600 pixels wide */
        mainContainer.style.height = '865px';
      }
 
})
 
 
 
buttonBack2.addEventListener('click', () => {
    formParts[1].style.left = "0";
    formParts[2].style.left = "600px";
    progressBar.style.width = '50%';
    stepsText[2].style.color = "#404040";
 
    if (window.matchMedia("(max-width: 600px)").matches) {
        /* The viewport is less than, or equal to, 600 pixels wide */
        mainContainer.style.height = '805px';
     } else {
        /* The viewport is greater than 600 pixels wide */
        mainContainer.style.height = '770px';
      }
})
 
 
 
buttonBack3.addEventListener('click', () => {
    formParts[2].style.left = "0";
    formParts[3].style.left = "600px";
    progressBar.style.width = '75%';
    stepsText[3].style.color = "#404040";
    
    if (window.matchMedia("(max-width: 600px)").matches) {
        /* The viewport is less than, or equal to, 600 pixels wide */
        mainContainer.style.height = '1035px';
      } else {
        /* The viewport is greater than 600 pixels wide */
        mainContainer.style.height = '1000px';
      }
 
})
 
 
 
 
//DATA VALIDATION
 
const form = document.getElementById('form');
 
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const email = document.getElementById('emailInput');
const phone = document.getElementById('phoneInput');
 
const companyName = document.getElementById('companyNameInput');
const companyZip = document.getElementById('companyZipInput');
const companyNumber = document.getElementById('companyNumberInput');
const vatNumber = document.getElementById('vatNumberInput');
 
const carsNumber = document.getElementById('carsInput');
const vansNumber = document.getElementById('vansInput');
const trucksNumber = document.getElementById('trucksInput');
const busesNumber = document.getElementById('busesInput');
const nationalNumber = document.getElementById('nationalInput');
const internationalNumber = document.getElementById('internationalInput');
 
const privacyPolicyConsent = document.querySelector('input[name=privacy]');
 
const allInputs = Array.prototype.slice.call(document.querySelectorAll('input'));
const allButtons = Array.prototype.slice.call(document.querySelectorAll('button'));
 
const blank = '&nbsp;'
 
const errorMessages = {
    genericError: 'This field cannot be left blank',
    emailError1: 'The email address field cannot be left blank',
    emailError2: 'Please enter a valid email address',
    phoneError1: 'The phone number field cannot be left blank',
    phoneError2: 'Please enter a valid phone number',
    numberError: 'Please enter a value.'
}
 
const checkInputValidity = [
 
    {
        firstNameCheck: false,
        lastNameCheck: false,
        emailCheck: false,
        phoneCheck: false
    },
 
    {
        companyNameCheck: false,
        companyZipCheck: false,
        companyNumberCheck: false,
        vatNumberCheck: false
    },
 
    {
        carsNumberCheck: false,
        vansNumberCheck: false,
        trucksNumberCheck: false,
        busesNumberCheck: false,
        nationalNumberCheck: false,
        internationalNumberCheck: false
    }
 
];
 
 
 
buttonNext1.addEventListener('click', checkPersonalInputs);

buttonSubmit.addEventListener('click', submitData);

function submitData ()
{
alert("This is submitData alert");
console.log("this is submitData console log");



}


buttonNext2.addEventListener('click', () => {
    checkInputValidity[1].companyNameCheck = true;
    checkInputValidity[1].companyZipCheck = true;
    checkInputValidity[1].companyNumberCheck = true;
    checkInputValidity[1].vatNumberCheck = true;
    carsNumber.tabIndex = 0;
    vansNumber.tabIndex = 0;
    trucksNumber.tabIndex = 0;
    busesNumber.tabIndex = 0;
    nationalNumber.tabIndex = 0;
    internationalNumber.tabIndex = 0;
    buttonBack2.tabIndex = 0;  
    buttonNext3.tabIndex = 0;
    formThreeTransition()
 
});
 
buttonNext3.addEventListener('click', checkFleetInputs);
 
form.addEventListener('submit', (e) => {
 
    if (!privacyPolicyConsent.checked) {
        e.preventDefault();
        setError(privacyPolicyConsent, 'Please check privacy box to submit form');
    } else {
        removeError(privacyPolicyConsent, blank);    
    }
 
});
 
 
function checkPersonalInputs() {
 
    //get values from inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
 
 
    //check firstName input
    if (firstNameValue === '' || firstNameValue == null) {
        setError(firstName, errorMessages.genericError)
        checkInputValidity[0].firstNameCheck = false;
    } else {
        removeError(firstName, blank);    
        checkInputValidity[0].firstNameCheck = true;
    }
 
 
    //check lastName input
    if (lastNameValue === '' || lastNameValue == null) {
        setError(lastName, errorMessages.genericError)
        checkInputValidity[0].lastNameCheck = false;
    } else {
        removeError(lastName, blank);     
        checkInputValidity[0].lastNameCheck = true;
    }
 
 
    // check email input
    if (emailValue === '' || emailValue == null) {
        setError(email, errorMessages.emailError1)
    } else if (!validEmail(emailValue)) {
        setError(email, errorMessages.emailError2)
        checkInputValidity[0].emailCheck = false;
    } else {
        removeError(email, blank);
        checkInputValidity[0].emailCheck = true;
    }
 
    //check phone input
    if (phoneValue === '' || phoneValue == null) {
        setError(phone, errorMessages.phoneError1)
    } else if (!validPhone(phoneValue) || phoneValue.length <= 6) {
        setError(phone, errorMessages.phoneError2)
        checkInputValidity[0].phoneCheck = false;
    } else {
        removeError(phone, blank);
        checkInputValidity[0].phoneCheck = true;
    }
 
 
    if(Object.values(checkInputValidity[0]).every(Boolean)) {
        formTwoTransition()
        companyName.tabIndex = 0;
        companyZip.tabIndex = -0;
        companyNumber.tabIndex = 0;
        vatNumber.tabIndex = 0;      
        buttonBack1.tabIndex = 0;  
        buttonNext2.tabIndex = 0; 
    } 
}
 
 
function checkCompanyInputs() {
 
    //get values from inputs
    const companyNameValue = companyName.value.trim();
    const companyZipValue = companyZip.value.trim();
    const companyNumberValue = companyNumber.value.trim();
    const vatNumberValue = vatNumber.value.trim();
 
 
    //check companyName input
    if (companyNameValue === '' || companyNameValue == null) {
        setError(companyName, errorMessages.genericError)
        checkInputValidity[1].companyNameCheck = false;
    } else {
        removeError(companyName, blank);    
        checkInputValidity[1].companyNameCheck = true;
    }
 
 
    //check companyZip input
    if (companyZipValue === '' || companyZipValue == null) {
        setError(companyZip, errorMessages.genericError)
        checkInputValidity[1].companyZipCheck = false;
    } else {
        removeError(companyZip, blank);     
        checkInputValidity[1].companyZipCheck = true;
    }
 
 
     //check companyNumber input
     if (companyNumberValue === '' || companyNumberValue == null) {
        setError(companyNumber, errorMessages.genericError)
        checkInputValidity[1].companyNumberCheck = false;
    } else {
        removeError(companyNumber, blank);     
        checkInputValidity[1].companyNumberCheck = true;
    }
 
 
     //check vatNumber input
     if (vatNumberValue === '' || vatNumberValue == null) {
        setError(vatNumber, errorMessages.genericError)
        checkInputValidity[1].vatNumberCheck = false;
    } else {
        removeError(vatNumber, blank);     
        checkInputValidity[1].vatNumberCheck = true;
    }
 
    if(Object.values(checkInputValidity[1]).every(Boolean)) {
        formThreeTransition()
        carsNumber.tabIndex = 0;
        vansNumber.tabIndex = 0;
        trucksNumber.tabIndex = 0;
        busesNumber.tabIndex = 0;
        nationalNumber.tabIndex = 0;
        internationalNumber.tabIndex = 0;
        buttonBack2.tabIndex = 0;  
        buttonNext3.tabIndex = 0;
    } 
 
}
 
 
 
function checkFleetInputs() {
 
    //get values from inputs
    const carsNumberValue = carsNumber.value.trim();
    const vansNumberValue = vansNumber.value.trim();
    const trucksNumberValue = trucksNumber.value.trim();
    const busesNumberValue = busesNumber.value.trim();
    const nationalNumberValue = nationalNumber.value.trim();
    const internationalNumberValue = internationalNumber.value.trim();
 
 
    //check carNumber input
    if (carsNumberValue === '' || carsNumberValue == null) {
        setError(carsNumber, errorMessages.numberError)
        checkInputValidity[2].carsNumberCheck =false;
    } else {
        removeError(carsNumber, blank);    
        checkInputValidity[2].carsNumberCheck = true;
    }
 
    //check vansNumber input
    if (vansNumberValue === '' || vansNumberValue == null) {
        setError(vansNumber, errorMessages.numberError)
        checkInputValidity[2].vansNumberCheck = false;
    } else {
        removeError(vansNumber, blank);    
        checkInputValidity[2].vansNumberCheck = true;
    }
 
    //check trucksNumber input
    if (trucksNumberValue === '' || trucksNumberValue == null) {
        setError(trucksNumber, errorMessages.numberError)
        checkInputValidity[2].trucksNumberCheck =false;
    } else {
        removeError(trucksNumber, blank);    
        checkInputValidity[2].trucksNumberCheck = true;
    }
 
    //check busesNumber input
    if (busesNumberValue === '' || busesNumberValue == null) {
        setError(busesNumber, errorMessages.numberError)
        checkInputValidity[2].busesNumberCheck = false;
    } else {
        removeError(busesNumber, blank);    
        checkInputValidity[2].busesNumberCheck = true;
    }
 
    //check nationalNumber input
    if (nationalNumberValue === '' || nationalNumberValue == null) {
        setError(nationalNumber, errorMessages.numberError)
        checkInputValidity[2].nationalNumberCheck = false;
    } else {
        removeError(nationalNumber, blank);    
        checkInputValidity[2].nationalNumberCheck = true;
    }
 
    //check internationalNumber input
    if (internationalNumberValue === '' || internationalNumberValue == null) {
        setError(internationalNumber, errorMessages.numberError)
        checkInputValidity[2].internationalNumberCheck =false;
    } else {
        removeError(internationalNumber, blank);    
        checkInputValidity[2].internationalNumberCheck = true;
    }
 
 
    if(Object.values(checkInputValidity[2]).every(Boolean)) {
        formFourTransition()
        buttonBack3.tabIndex = 0;  
        buttonSubmit.tabIndex = 0;
    }
 
}
 
 
 
 
//Function that adds error message and class
function setError(input, message) {
 
    const parent = input.parentElement;
    const para = parent.querySelector('p');
 
    //add error message
    para.innerText = message;
 
    //add error classes
    input.classList.add('error_border');    
    para.classList.add('error_message');
 
}
 
//Function that removes error message and class
function removeError(input, message) {
 
    const parent = input.parentElement;
    const para = parent.querySelector('p');
 
    //remove error message
    para.innerText = message;
 
    //remove error class
    input.classList.remove('error_border');
    para.classList.remove('error_message');
 
}
 
//Checks whether email format is valid
function validEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
 
//Checks whether phone number format is valid
function validPhone(phone) {
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
}

