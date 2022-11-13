const data = 'data.json';
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
   members.forEach(displayMembers);
});

function displayMembers(member){
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
    title.innerText = member.name;
    detailDiv.appendChild(title);
/*add website*/
     let site = document.createElement('p');
    site.classList.add('cardSite');       

    let link = document.createElement('a');
    link.setAttribute('href', member.website);
    link.setAttribute('target', 'blank');
    link.innerText = 'Visit Website';
    site.appendChild(link);
    detailDiv.appendChild(site);
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
    document.getElementById('directory').appendChild(card);
}