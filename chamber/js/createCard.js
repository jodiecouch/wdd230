
const data = 'data.json';

if (document.querySelector('#directory')){
    let myElem = 'directory';
    const directory = document.querySelector('#directory');
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    gridbutton.addEventListener("click", () => {
        // example using arrow function
        directory.classList.add("grid");
        directory.classList.remove("list");
    });

    listbutton.addEventListener("click", showList); // example using defined function

    function showList() {
        directory.classList.add("list");
        directory.classList.remove("grid");
    }

    fetch(data)
  .then(response => response.json())
  .then(json => {
    /*console.log(json)*/
   const members = json['directory'];
   members.forEach(x => displayMembers(x, myElem));
});
}

if (document.querySelector('#spotlight')){
    let spotlight = 'spotlight';
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
        /*spots.forEach(x => displayMembers(gold[x]), spotlight);*/
        spots.forEach(x => displaySpotlight(gold[x]));
        for(let i = 0; i < spots.length; i++){
            let mySpot = 'spot' +(i+1);
            console.log(mySpot);
            displayMembers(gold[spots[i]],mySpot);
        }
    }
    
})
}

function displaySpotlight(s){
   /* let spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
*/
    console.log(s.name);
    /*const spot2 = document.getElementById('spot2');
    spot2.remove();
    YOU COULD REMOVE OR JUST REPLACE THE HTML OR INNERTEXT of each item in each spot
    */
}

function displayMembers(member, cardHolder){
   /* add div.card*/
    let card = document.createElement('div');
    card.classList.add('card');
   
     /* Add div.cardImage */
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('cardImage');
    card.appendChild(imgDiv);
    
    /*add img to cardImage div */
    let image = document.createElement('img');
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Image for ${member.name}`);
    image.setAttribute('loading', 'lazy');
    imgDiv.appendChild(image);
    
/*cardDetail*/
    let detailDiv = document.createElement('div');
    detailDiv.classList.add('cardDetail');
/*title = member name*/
    let title = document.createElement('p');
    title.classList.add('cardTitle');
    
/*add website*/
    let link = document.createElement('a');
    link.setAttribute('href', member.website);
    link.setAttribute('target', 'blank');
    link.innerText = member.name;
    title.appendChild(link);
    detailDiv.appendChild(title);
/* add address */
    let address = document.createElement('p');
    address.classList.add('cardAddress');
    address.innerText = member.address;
    detailDiv.appendChild(address);

/*add phone */
    let phone = document.createElement('p')
    phone.classList.add('cardPhone');
    phone.innerText = member.phone;
    detailDiv.appendChild(phone);

    card.appendChild(detailDiv);
    document.getElementById(cardHolder).appendChild(card);
    
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