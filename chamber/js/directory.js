const data = 'data.json';
const directory = document.querySelector('.directory');

fetch(data)
  .then(response => response.json())
  .then(json => {
    console.log(json)
   const members = json['directory'];
   members.forEach(displayMembers);
});

function displayMembers(member){
    console.log(member.name);
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

    /* Add div.cardDetail
            p.cardTitle
            p.cardSite
            p.cardAddress
            p.cardPhone
            */

    let detailDiv = document.createElement('div');
    detailDiv.classList.add('cardDetail');

    let titleP = document.createElement('p');

    card.appendChild(detailDiv);
    document.getElementById('directory').appendChild(card);
}