const inputEl = document.querySelector("#input-el")
const locBtn = document.querySelector("#location-btn")
let position = {
    latitude: 0,
    longitude: 0
}

let apiKey = '522a61fbcae792312bab3fdee99f3270'
let api = '';

//GET DEVICE LOCATION
locBtn.addEventListener('click', ()=>
{
    let success = (pos)=>{
        position.lat = pos.coords.latitude
        position.lon = pos.coords.longitude
        requestAPI()
    }
    
    let locFailed = ()=>{
        console.log("failed getting permission")
    }
    
    navigator.geolocation.getCurrentPosition(success, locFailed)
})

// INPUT 
inputEl.addEventListener('keyup', (e)=>{
    if(e.key === "Enter" && inputEl.value !== ""){
        requestCity(inputEl.value)
    }
})

// REQUEST API FOR CURRENT LOC USING COORDINATES
function requestAPI(){
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${apiKey}`
    fetchData()
}

// REQUEST API FOR SELECTED LOCATION

function requestCity(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetchData()
}

function fetchData(){
    fetch(api)
    .then(res => res.json())
    .then(data => weatherData(data))
    .catch(err => err.message)
}

//DISPLAY WEATHER DATA
function weatherData(result){
    if(result.status === 200){
        console.log(result)
    }else{
        console.log(result)
    }
}
