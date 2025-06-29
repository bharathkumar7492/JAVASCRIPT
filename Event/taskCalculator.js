let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
 e.preventDefault()

let num1 = parseInt( document.getElementById("num1").value) 
let num2 = parseInt( document.getElementById("num2").value) 

let add = num1 + num2

 console.log(add)


let output = document.querySelector(".output")

// output.innerText = add

     output.innerHTML = ` <h3> addition of ${num1} and ${num2} is ${add} </h3>`

     console.log("submitted...")
           })



    let btn = document.querySelector(".btn")

    btn.addEventListener("click",()=>{
     let outer = document.querySelector(".outer")
        outer.classList.toggle("dark")
    })