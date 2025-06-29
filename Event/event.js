let wish=()=>{
    console.log("welcome to event..")
}

// wish()


                    // Even Handler

let changeColor = ()=>{

    let header = document.getElementsByTagName("header")

    console.log(header[0])

    header[0].style.backgroundColor="red"

}

let changeColor2 = ()=>{

    let header = document.getElementsByTagName("header")

    console.log(header[0])

    header[0].style.backgroundColor="aquamarine"
    
}


                    // Event Listener

let btn2 = document.querySelector(".btn2")

console.log(btn2)

btn2.addEventListener("dblclick",()=>{

    alert("i am dbl click event")
})

let section = document.querySelector("section")

console.log("section")

section.addEventListener("mouseover",()=>{

    section.style.backgroundColor="grey"
})

section.addEventListener("mouseleave",()=>{

    section.style.backgroundColor="rgb(106, 244, 78)"
})

let box2 = document.querySelector("#b2")

box2.addEventListener("click",()=>{

    let box1 = document.querySelector("#b1")

    let box1Content = box1.innerHTML

    box2.innerHTML = box1Content

    box1.innerHTML = ""


})

let box1 = document.querySelector("#b1")

box1.addEventListener("click",()=>{

    let box2 = document.querySelector("#b2")

    let box2Content = box2.innerHTML

    box1.innerHTML = box2Content

    box2.innerHTML = ""


})

