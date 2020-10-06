const form = document.getElementById('form')
const name = document.getElementById('uname')
const lname = document.getElementById('lname')
const mail = document.getElementById('mail')
const pno = document.getElementById('Pno')
const dob = document.getElementById('dob')
const pass = document.getElementById('pass')
const err = document.getElementById('error')
form.addEventListener('submit',(event)=>{
    let messages = []
    if(pass.value.length<5){
        messages.push("Too short for password")
    }
    if(pass.value.length>20){
        messages.push("Too long for password")
    }
    if(pno.value.length!=10){
        messages.push("Invalid Number")
    }
    if(name.value.trim()==""){
        messages.push("Invalid First Name")
    }
    if(name.value.trim()==""){
        messages.push("Invalid Last Name")
    }
    if(pass.value.trim()==""){
        messages.push("Invalid Password")
    }
    if (messages.length>0){
        event.preventDefault();
        err.innerText = messages.join(', ')
    }
    else{
        event.preventDefault()
        console.log("Name:",name.value,lname.value)
        console.log("E-mail:",mail.value)
        console.log("Phone No:",pno.value)
        console.log("DOB:",dob.value)
        err.innerText = messages.join(', ')
    }
})
