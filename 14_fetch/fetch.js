let fetchData = fetch("https://fakestoreapi.com/products")
console.log(fetchData)

fetchData
.then((data)=>{
    console.log(data)

    let jsonData = data.json()
    console.log(jsonData)

    jsonData
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })

})
.catch((err)=>{
    console.log(err)
})