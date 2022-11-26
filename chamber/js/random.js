const data = 'data.json';

fetch(data)
.then(response => response.json())
.then(json=>{
    /*console.log(json);*/
    const members = json['directory'];
    const gold = members.filter(x=> x.membership >=2);  /*this gets all members with a membership level greater then or equal to 2*/
    console.log(gold);
    const spotsToFill = Math.min(gold.length,3);    /*get 3 spots or all gold members if not more than 3*/
    if(spotsToFill > 0){
        let spots = getSpot(gold, spotsToFill);
        console.log(spots);
        displaySpotlight(spots,gold);
    }
    
})

function displaySpotlight(spots, gold){
   /* let spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
*/
    spots.forEach(x => console.log(gold[x].name));
}

function getSpot(gold,x){
    const min = 0;  /*since array is 0 based*/
    const max = gold.length-1;
    let spots = [];
    let i = 0;
    do{        
        /*console.log(`Iteration ${i}`);
        console.log(Math.floor(Math.random() * (max - min + 1) + min));
        */
       let n = Math.floor(Math.random() * (max - min + 1) + min);
       if(!spots.includes(n)){
        spots.push(n);
        i+=1;
       }
    } while (i < x);
    return spots;
}