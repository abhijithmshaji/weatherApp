function getWeather(){
    cityName=city.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(res=>res.json()).then(out=>displayData(out))
}

function displayData(dataArray){
    cname=dataArray.name
    temp=dataArray.main.temp
    description=dataArray.weather[0].description
    humidity=dataArray.main.humidity
    wind=dataArray.wind.speed
    icon=dataArray.weather[0].icon
    // alert(typeof(icon))
    result.innerHTML= `
<h2>Weather in ${cname} </h2>
<h1>Temp : ${temp}</h1>
<div>
<img src='https://openweathermap.org/img/'+icon+'.png' />
<h3>${description}</h3>
</div>
<h3>Humidity: ${humidity}%</h3>
<h4>Wind speed: ${wind} km/h</h4>
`
}
