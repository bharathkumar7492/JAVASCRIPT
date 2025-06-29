
let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let loginName = document.getElementById("username").value
    let loginPassword = document.getElementById("password").value

    console.log(loginName,loginPassword)

    let userNAME = localStorage.getItem("Name")
    let userPASS = localStorage.getItem("Password")

    if(loginName == userNAME && loginPassword == userPASS)
    {
        alert("login done")
        
        open("./homepage.html")
    }
    else{
        alert("wrong input")
    }


})