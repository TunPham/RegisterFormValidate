const btnRegister = document.getElementById("btnRegister")

btnRegister.onclick = () => {
    const email = document.getElementById("email");    
    const birthday = document.getElementById("YOB");
    document.getElementById("")
    
    const password = document.getElementById("password");
    const rePassword = document.getElementById("re-password");
    if (email.value.length == 0) {
        alert("User name is empty")
        return;
    }
    if (!email.value.includes("@")  ){
        alert("Wrong Email Format")
        return
    }
    if(birthday.value.length ==0) {
        alert("Please enter your birthday")
        return
    }
    
    if (password.value.length == 0) {
        alert("Password is required")
        return;
    }
    if ( password.value.length < 6 || password.value.length > 12 ){
        alert("Password should be between 6 and 12 character");
        return;
    }
    if (password.value.includes(" ")){
        alert("For security purpose, please enter password without any space")
        return
    }
    if (rePassword.value.length == 0){
        alert("Please confirm your password")
        return
    }
    if (password.value != rePassword.value){
        alert("Repeat password is incorrect")
        return
    }
    

    
    alert("Login Successfully");
}