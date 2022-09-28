function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var dob = document.contactForm.dob.value;
    var country = document.contactForm.country.value;
    var address = document.contactForm.address.value;
    var zip = document.contactForm.zip.value;
    var gender = document.contactForm.gender.value;
    var contact = document.contactForm.contact.value;
    var relation = document.contactForm.relation.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
    
    var nameErr = emailErr = mobileErr = dobErr = countryErr = addressErr = zipErr = genderErr = contactErr = relationErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate phone number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate dob
    if(dob == "") {
        printError("dobErr", "Please select your Date of Birth");
    } else {
        printError("dobErr", "");
        dobErr = false;
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

     // Validate address   
    if(address == "") {
        printError("addressErr", "Please select your address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }

     // Validate zip   
    if(zip == "") {
        printError("zipErr", "Please enter your zip code");
    } else {
        var regex = /^[1-9]\d{3}$/;
        if(regex.test(zip) === false) {
            printError("zipErr", "Please enter a valid 4 digit zip code");
        } else{
            printError("zipErr", "");
            zipErr = false;
        }
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Validate emergency contact
    if(contact == "") {
        printError("contactErr", "Please enter your emergency contact number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(contact) === false) {
            printError("contactErr", "Please enter a valid 11 digit mobile emergenct contact number");
        } else{
            printError("contactErr", "");
            contactErr = false;
        }
    }
    
    // Validate relation with emergency contact
    if(relation == "") {
        printError("relationErr", "Please enter your realation with the emergency contact");
    } else {
        printError("relationErr", "");
        relationErr = false;
    }
    

    if((nameErr || emailErr || mobileErr || dobErr || countryErr || addressErr || zipErr || genderErr || contactErr || relationErr) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Date of Birth: " + dob + "\n" +
                          "Country: " + country + "\n" +
                          "Address: " + address + "\n";
                          "ZIP: " + zip + "\n";
                          "Gender: " + gender + "\n";
                          "Emergency Contact: " + contact + "\n";
                          "Relation with the Contact: " + relation + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        alert(dataPreview);
    }
};