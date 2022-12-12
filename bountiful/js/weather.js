// select HTML elements in the document
const temp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const chill = document.querySelector('#humid');
const description = document.querySelector('#weather-words');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-caption');
const weatherKey = 'a13310b584dc5039b90a85184734cfe0';

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=92010,us&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=92010&exclude=hourly&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';

var currentDay;


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
      return data
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();  //get current weather

function  displayResults(weatherData) {
  temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

currentDay = new Date(weatherData.dt*1000).toLocaleDateString('en-us',{year:"numeric", month:"numeric", day:"numeric"});
console.log(currentDay);

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  //chill.innerHTML= windChill(weatherData.main.temp, weatherData.wind.speed);
  chill.innerHTML=  weatherData.main.humidity;
}

//give credit to https://openweathermap.org/ anywhere you use the weather api!!!!!!!!!!!!!


async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayForecast(data);
      return data
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

fetchForecast();  //get current weather

function displayForecast(future){    
    console.log(future.city.name);
    console.log(future.list[2].main.temp);
   console.log(future.list[2].dt_txt);


   var dayName = new Date(future.list[2].dt*1000).toLocaleDateString('en-us',{year:"numeric", month:"numeric", day:"numeric"});
console.log("day name" + dayName);

console.log(currentDay);
var today = new Date(currentDay);
if (typeof today === 'object' && today !== null && 'getDate' in today) { 
    today.setDate(today.getDate());
    today.setHours(11,0,0);

    const list = future.list;
   
    var day1 = new Date(currentDay);
    day1.setDate(today.getDate()+1);
    var day2 = new Date(day1);
    day2.setDate(day1.getDate()+1);
    var day3 = new Date(day2);
    day3.setDate(day2.getDate()+1);
/*
    console.log(day1);
    console.log(day2);
    console.log(day3);
*/
    var dayList = [];
    let i = 0;
    //get the index of the day I want to use for forecast and put it in dayList
    list.forEach((item)=>{
        let day = new Date(item.dt_txt);
        //day1
        if(day.getDate() == day1.getDate())
        {
        if(day.getHours() == 12){            
            dayList.push(i);
        }
        i++;
        }
        //day 2
         if(day.getDate() == day2.getDate())
        {
        if(day.getHours() == 12){            
            //d2 = i-1;            
            dayList.push(i);
        }
        i++;
        }
        //day3
         if(day.getDate() == day3.getDate())
        {
        if(day.getHours() == 12){            
            //d3 = i-1;
            dayList.push(i);
        }
        i++;
        }
    });

    // forecast values for the indexes in dayList. Index is for weather data 'list' item

    let counter = 0
    dayList.forEach((f)=>{
        let item = list[f];
        let humidity = item.main.humidity;
        let temp = item.main.temp;
        let icon = item.weather.icon;
        let description = item.weather[0].description;
        let displayDate = item.dt_txt;
        
        console.log(`Day Number ${counter} for date ${displayDate} temp is ${temp} humidity is ${humidity} description is ${description}`);
        counter++;
    })
}

}
