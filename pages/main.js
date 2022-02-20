var fname = firstName
var lname = lastName
var age = userAge
var gender = document.querySelectorAll("input.gender") //list of gender
var interests = document.querySelectorAll("input.interest") //list of interests

//this function returns error message of name validation or undefiened
function nameValidation(name){ 
    var message;
    if(name===""){
        message = "this field is required"
    }else if(name.length<3){
        message = "you must provide at least 3 characters"
    }else if(!name.match(/^[a-zA-Z]+$/g)){
        message = "you must not insert numbers or special characters"
    }
    return message
}

//this function returns error message of age validation or undefiened
function ageValidation(age){
    var message;
    if(age<16 || age>60){
        message =  "age must be between 16 and 60"
    }
    return message;
}

//this function returns error message of check validation or null
function checkValidation(list){
    var message="you must choose at least one";
    for(var i=0; i<list.length;i++){
        if(list[i].checked){
            message =null;
        }
    }
    return message;
}


// form validation function return true if not valid undefiened if valid
function formValidationError (){
    // validate fname
   if(nameValidation(fname.value)){
       document.querySelector("#firstName ~ span").innerHTML = nameValidation(fname.value)
       return true;
   } else{
        document.querySelector("#firstName ~ span").innerHTML = ""
   }


   // validate lname
    if(nameValidation(lname.value)){
    document.querySelector("#lastName ~ span").innerHTML = nameValidation(lname.value)
    return true;
    } else{
        document.querySelector("#lastName ~ span").innerHTML = ""
    }

    // validate age
    if(ageValidation(age.value)){
        document.querySelector("#userAge ~ span").innerHTML = ageValidation(age.value)
        return true;
        } else{
            document.querySelector("#userAge ~ span").innerHTML = ""
        }


    // validate gender
    if(checkValidation(gender)){
        document.querySelector("#gender ~ span").innerHTML = checkValidation(gender)
        return true;
        } else{
            document.querySelector("#gender ~ span").innerHTML = ""
        }

    // validate interests
    if(checkValidation(interests)){
        document.querySelector("#interests ~ span").innerHTML = checkValidation(interests)
        return true;
        } else{
            document.querySelector("#interests ~ span").innerHTML = ""
        }    
}


// form submit handelling
myForm.onsubmit = function(e){
    if(formValidationError()){
        e.preventDefault()
    }
}

// add handelling
addButton.onclick = function(){
    if(!formValidationError()){
        var myrow = document.createElement("tr")
        var cell1 = document.createElement("td")
        var cell2 = document.createElement("td")
        cell1.innerHTML = fname.value+" "+lname.value
        cell2.innerHTML = age.value
        myrow.appendChild(cell1)
        myrow.appendChild(cell2)
        myTable.appendChild(myrow)
    }
}


