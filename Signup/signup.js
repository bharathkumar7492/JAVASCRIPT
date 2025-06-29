let form = document.querySelector("form")
// console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let userName = document.getElementById("username").value
    let userPassword = document.getElementById("password").value

    console.log(userName)
    console.log(userPassword)

                    // LocalStorage

    localStorage.setItem("Name",userName)
    localStorage.setItem("Password",userPassword)

    console.log("submitted..")

    open("./login.html")

})