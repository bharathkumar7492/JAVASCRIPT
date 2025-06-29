let getData = async ()=>{

try{
        let response = await fetch("https://fakestoreapi.com/products")
         console.log(response)

        let jsondata = await response.json()
         console.log(jsondata)

         jsondata.map((ele)=>{
            console.log(ele.title)
            // console.log(ele.price)
            // console.log(ele.count)
         })

         let ol = document.querySelector("ol")
         console.log(ol)

         jsondata.map((ele)=>{
            let list = document.createElement("li")
            // list.innerText = ele.title
            // console.log(list)
            li.textContent =

            
         })

}
catch(e){
    console.log(e)
}
}
getData()