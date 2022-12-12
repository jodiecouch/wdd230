// select HTML elements in the document

const  weather = document.querySelector('.weather');
const  weather2 = document.querySelector('.weather2');
const weatherKey = 'a13310b584dc5039b90a85184734cfe0';

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=92010,us&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=92010&exclude=hourly&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';

var currentDay;


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      //displayResults(data);
      buildWeatherCard(data,1, weather);
      buildWeatherCard(data,1, weather2);
      return data
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();  //get current weather

//give credit to https://openweathermap.org/ anywhere you use the weather api!!!!!!!!!!!!!


async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
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
  var dayList = getDays(future);
    // forecast values for the indexes in dayList. Index is for weather data 'list' item

    let counter = 0
    dayList.forEach((f)=>{
        buildWeatherCard(future.list[f],0, weather);
        buildWeatherCard(future.list[f],0, weather2);       
    })
    }

function buildWeatherCard(item, todayTitle, location){
//create the weather card container
    let card = document.createElement('div');
    card.classList.add('weather-card');
//create weather day title
    let dayTitle = document.createElement('div');
    if (todayTitle == 1 ){
        dayTitle.innerText = 'Today';
        currentDay = new Date(item.dt*1000).toLocaleDateString('en-us',{year:"numeric", month:"numeric", day:"numeric"});
    } else {
        const wDate = new Date(item.dt_txt);
        dayTitle.innerText = wDate.toLocaleDateString('en-us', {weekday: 'long'});
    }
    card.appendChild(dayTitle)

    let condition = document.createElement('div');
    condition.classList.add('weather-condition');
//create the weather icon
    const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
    const desc = item.weather[0].description;
    let image = document.createElement('img');
    image.setAttribute('src', iconsrc);
    image.setAttribute('alt', desc);
    image.setAttribute('loading', 'lazy');
    condition.appendChild(image);
//create the weather temp
    let temp = document.createElement('div');
    temp.innerHTML = `<span id="temperature">${item.main.temp}</span> <sup class="degree">&#x2109;</sup>`;
    condition.appendChild(temp);

    card.appendChild(condition);
//add description
    let description = document.createElement('div');
    description.innerHTML = desc;
    card.appendChild(description);
//add humidity
    let humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.innerHTML = `Humidity: ${item.main.humidity} %`;
    card.appendChild(humidity);

//add the weather card to the weather container
    
    location.appendChild(card);
   
    
}
    


function getDays(future){
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

    }
    return dayList;
}
