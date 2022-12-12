// select HTML elements in the document
const temp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const chill = document.querySelector('#humid');
const description = document.querySelector('#weather-words');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-caption');
const weatherKey = 'a13310b584dc5039b90a85184734cfe0';
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=92010,us&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=92010&exclude=hourly&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';

//const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=a13310b584dc5039b90a85184734cfe0';
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

//const forecast = apiFetch(forecastUrl)  //get forecast
//console.log('You made it to here');

function  displayResults(weatherData) {
  temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  //speed.innerHTML = weatherData.wind.speed;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
//currentDay = Date(weatherData.dt).toLocaleDateString('en-us',{year:"numeric", month:"short", day:"numeric"});
//let currentDay = Date(weatherData.dt);
//longDay = new Intl.DateTimeFormat('en-US').format(currentDay);

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
  const result = today.getDate();
  console.log("todays date" + result); 
    today.setDate(today.getDate()+1);
    today.setHours(11,0,0);
    console.log("new today is " + today);
    //console.log("in js time today is " + today.getTime());
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
    var d1 = 0;
    var d2 = 0;
    var d3 = 0;

    var dayList = [];
    dayList.push(0);
    let i = 0;
    
    //list.forEach(x=> fillDays(x));
    list.forEach((item)=>{
        let day = new Date(item.dt_txt);
        //day1
        if(day.getDate() == day1.getDate())
        {
        if(day.getHours() == 12){            
            dayList.push(i-1);
        }
        i++;
        }
        //day 2
         if(day.getDate() == day2.getDate())
        {
        if(day.getHours() == 12){            
            //d2 = i-1;            
            dayList.push(i-1);
        }
        i++;
        }
        //day3
         if(day.getDate() == day3.getDate())
        {
        if(day.getHours() == 12){            
            //d3 = i-1;
            dayList.push(i-1);
        }
        i++;
        }
    });

    //day1 forecast values
    
    console.log(list[d1].dt_txt);
    console.log(d2);
    console.log(d3);    
    /*
    let item = list[d1];
    let humidity = item.main.humidity;
    let temp = item.main.temp;
    let icon = item.weather.icon;
    let description = item.weather.description;
*/
    let counter = 0
    dayList.forEach((f)=>{
        let item = list[f];
        let humidity = item.main.humidity;
        let temp = item.main.temp;
        let icon = item.weather.icon;
        let description = item.weather[0].description;
        
        console.log(`Day Number ${counter} temp is ${temp} humidity is ${humidity} description is ${description}`);
        counter++;
    })
}

}
