
// let getData = async ()=>{

//     let response = await fetch("https://fakestoreapi.com/products")
//     console.log(response)

//     let jsondata = await response.json()
//     console.log(jsondata)
// }
// getData()


let getData = async ()=>{

try{
        let response = await fetch("https://fakestoreapi.com/products")
    console.log(response)

    let jsondata = await response.json()
    console.log(jsondata)
}
catch(e){
    console.log(e)
}
}
getData()