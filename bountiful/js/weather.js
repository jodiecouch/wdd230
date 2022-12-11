// select HTML elements in the document
const temp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const chill = document.querySelector('#humid');
const description = document.querySelector('#weather-words');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-caption');
const weatherKey = 'a13310b584dc5039b90a85184734cfe0';
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=83311,us&units=imperial&appid=a13310b584dc5039b90a85184734cfe0';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function  displayResults(weatherData) {
  temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  //speed.innerHTML = weatherData.wind.speed;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  //chill.innerHTML= windChill(weatherData.main.temp, weatherData.wind.speed);
  chill.innerHTML=  weatherData.main.humidity;
}

//give credit to https://openweathermap.org/ anywhere you use the weather api!!!!!!!!!!!!!

/*
let tempValue = temp.innerHTML;
let speedValue = speed.innerHTML;
*/
function windChill(t, s){
    let c = 'NA'
    if ( t <= 50 && s > 3.0) {
        const r = Math.pow(s, .16);
         let x = 35.74 + (.6215*t) - (35.75 *r) + (.4275*t*r);
         c = Math.trunc(x)
    }         
    return c;
    
}

/*chill.innerHTML= windChill(tempValue, speedValue); */
