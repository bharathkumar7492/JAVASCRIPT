
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let key ="ec2e4ef4f9fbff38fbdb6d59a86f92a4&units=metric"
// https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=ec2e4ef4f9fbff38fbdb6d59a86f92a4

let getData = async(cityName)=>{

    try{
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)

    let data = await res.json()
    console.log(data)

    document.getElementById("city").innerText = data.name
    document.getElementById("temp").innerText = data.main.temp + "°C⛅"
    document.getElementById("humidity").innerText =`Humudity: ${data.humidity}`
    document.getElementById("windspeed").innerText =`Wind Spped: ${data.wind.speed}`
    document.getElementById("maxtemp").innerText =`Max temp: ${data.main.temp_max}`
    document.getElementById("mintemp").innerText =`Max temp: ${data.main.temp_min}`
    }

    catch(err){
        document.querySelector(".inner").innerHTML = `<h1>City not found</h1>`
        
    }

}

getData("kerala")

let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let cityName = document.getElementById("cityname").value
    getData(cityName)
})