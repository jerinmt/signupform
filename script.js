const form = document.querySelector("form");

const email = document.querySelector("#emailId");
const emailError = document.querySelector("#emailId + span.error");

email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailError.textContent = ""; // Remove the message content
      emailError.className = "error"; // Removes the `active` class
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });
  
  form.addEventListener("submit", (event) => {
    // if the email field is invalid
    if (!email.validity.valid) {
      // display an appropriate error message
      showError();
      // prevent form submission
      event.preventDefault();
    }
  });
  
  function showError() {
    if (email.validity.valueMissing) {
      // If empty
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      // If it's not an email address,
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      // If the value is too short,
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    // Add the `active` class
    emailError.className = "error active";
  }

  //name checking

  const firstName = document.querySelector("#firstName");
  const fnameError = document.querySelector("#firstName + span.error");
  const lastName = document.querySelector("#lastName");
  const lnameError = document.querySelector("#lastName + span.error");
  
  firstName.addEventListener("input", () => {
      if (firstName.validity.valid) {
        fnameError.textContent = ""; // Remove the message content
        fnameError.className = "error"; // Removes the `active` class
      } else {
        // If there is still an error, show the correct error
        fnameShowError();
      }
    });
    
    form.addEventListener("submit", (event) => {
      // if the first name field is invalid
      if (!firstName.validity.valid) {
        // display an appropriate error message
        fnameShowError();
        // prevent form submission
        event.preventDefault();
      }
    });
    
    function fnameShowError() {
      if (firstName.validity.valueMissing) {
        // If empty
        fnameError.textContent = "You need to enter a first name.";
      } else if (firstName.validity.tooShort) {
        // If the value is too short,
        fnameError.textContent = `First name should be at least ${firstName.minLength} characters; you entered ${firstName.value.length}.`;
      }
      // Add the `active` class
      fnameError.className = "error active";
    }
    
    lastName.addEventListener("input", () => {
      if (lastName.validity.valid) {
        lnameError.textContent = ""; // Remove the message content
        lnameError.className = "error"; // Removes the `active` class
      } else {
        // If there is still an error, show the correct error
        lnameShowError();
      }
    });
    
    form.addEventListener("submit", (event) => {
      // if the last name field is invalid
      if (!lastName.validity.valid) {
        // display an appropriate error message
        lnameShowError();
        // prevent form submission
        event.preventDefault();
      }
    });
    
    function lnameShowError() {
      if (lastName.validity.valueMissing) {
        // If empty
        lnameError.textContent = "You need to enter a last name.";
      } else if (lastName.validity.tooShort) {
        // If the value is too short,
        lnameError.textContent = `Last name should be at least ${lastName.minLength} characters; you entered ${lastName.value.length}.`;
      }
      // Add the `active` class
      lnameError.className = "error active";
    }

    const submit = document.querySelector('button');
submit.addEventListener('click', ()=> {
  let password1 = document.querySelector('#password').value;
  let password2 = document.querySelector('#confirmPassword').value;
  if(password1!==password2) {
    alert("Password mismatch");
  }
  else if(form.checkValidity()) {
    alert('Submitted successfully');
  }
});