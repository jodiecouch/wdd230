const temp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const chill = document.querySelector('#wind-chill');
let tempValue = temp.innerHTML;
let speedValue = speed.innerHTML;

function windChill(t, s){
    let c = 'NA'
    if ( t <= 50 && s > 3.0) {
        const r = Math.pow(s, .16);
         let x = 35.74 + (.6215*t) - (35.75 *r) + (.4275*t*r);
         c = Math.trunc(x)
    }         
    return c;
    
}

chill.innerHTML= windChill(tempValue, speedValue);