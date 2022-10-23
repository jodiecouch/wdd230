const temp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const chill = document.querySelector('#wind-chill');
let tempValue = temp.innerHTML;
let speedValue = speed.innerHTML;

function windChill(t, s){
    console.log(t);
    console.log(s);
    let c = 'NA'
    if ( t <= 50 && s > 3.0) {
        const r = Math.pow(s, .16);
        console.log(r);
         c = 35.74 + (.06215*t) - (35.75 *r) + (.4275*t*r);
    }         
    return c;
    
}

chill.innerHTML= windChill(tempValue, speedValue);