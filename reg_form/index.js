const submit = document.getElementById("submit")
const fname = document.getElementById("fname")
const date = document.getElementById("date")
const password = document.getElementById("password")
const phone = document.getElementById("phone")
const courses = document.getElementsByName("courses")
const form1 = document.getElementById('form')
submit.addEventListener("click", function(event) {
    event.preventDefault();
    let valid = true
    if(fname.value === "" || fname.value === null){
        alert("First name must be filled")
        valid = false
    }

    else if(date.value === "" || date.value === null){
        alert("Provide your DOB")
        valid = false
    }

    else if(password.value.length <= 6) {
        alert("Password is too short")
        valid = false
    }

    else if(phone.value.length >10 || phone.value.length < 10){
        alert("Phone number must contain 10 digits")
        valid = false
    }

    else {
        let courseSelection = false
        for(let i = 0; i < courses.length; i++){
            if(courses[i].checked){
                courseSelection = true;
                break;
            }
        }
        if(!courseSelection) {
            alert('Please select at least one course')
            valid = false
        }
    }
    
    if(valid){
        alert('Submission completed!')
        form1.reset()
    }
    
})
