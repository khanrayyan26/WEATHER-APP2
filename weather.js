 const   searchBar =document.querySelector('.search-bar');
 const searchButton = document.querySelector('.search-button');
 const   city   =document.querySelector('.city');
 const   temperature =document.querySelector('.temp');
 const  minMaxtemp  =document.querySelector('.min-max-temp');
 const  countryWeather =document.querySelector('.weather');
 const  weatherDescription =document.querySelector('.description');
 const  directionSpeed =document.querySelector('.direction-speed');
 const weatherCity = document.querySelector('.city')



 weatherCity.innerHTML= localStorage.getItem('value');

 searchButton.addEventListener('click'  , setFunc);

  

 let countryName = searchBar.value
        console.log('hello');

 function setFunc (e){
    if (searchBar !== ''){
        console.log('rayyan');
        getData(searchBar.value);
  }}

 

 function getData(value){
    localStorage.setItem('value',searchBar.value);
    console.log(localStorage.getItem("value"));
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=e255e75c119503684f936376361318e5')
    .then(function (response){
        return response.json();
    })
    .then(function (weather){
        city.innerHTML= weather.name;
        temperature.innerHTML= weather.main.temp;
        minMaxtemp.innerHTML="Min. "+weather.main.temp_min+"/Max. "+weather.main.temp_max;
        countryWeather.innerHTML= weather.weather[0].main;
        weatherDescription.innerHTML=weather.weather[0].description;
        directionSpeed.innerHTML="Wind direction: "+weather.wind.deg+" / Wind speed: "+weather.wind.speed;
        searchBar.value='';

    })
    .catch(function (err){
        console.log('apple');
        alert('Please enter a country name or its state to check the weather details');

    }) 
 }