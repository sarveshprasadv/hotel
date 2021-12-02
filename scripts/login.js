const userName = document.getElementById("username")
const password = document.getElementById("password")
const lgButton = document.getElementById("login")
const loButton = document.getElementById("logout")
const loginButton = document.getElementById("login-button")
let user = ""
let pass = ""

userName.addEventListener("keyup", ()=> {
    user=userName.value

})
password.addEventListener("keyup",  ()   => {
    pass = password.value
})

loginButton.addEventListener("click", () => {
    if(user === "admin" && pass === "admin" ){
        localStorage.setItem("user", user)
        lgButton.classList.add("login-hide")
        loButton.classList.remove("logout-hide")
        alert("logged in user successfully")
        document.getElementById('paybutton').disabled = false;
    }
}) 

loButton.addEventListener("click", () => {
    localStorage.removeItem("user")
        loButton.classList.add("logout-hide")
        lgButton.classList.remove("login-hide")
    document.getElementById('paybutton').disabled = true;
})