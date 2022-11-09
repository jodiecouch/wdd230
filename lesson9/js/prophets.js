const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    /*console.table(jsonObject);  // temporary checking for valid response and data parsing*/
   const prophets = jsonObject['prophets'];
   prophets.forEach(displayProphets);
  });

   function displayProphets(prophet) {    
        
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let place = document.createElement('p');
        let dob = document.createElement('p');

        let prophetName = `${prophet.name} ${prophet.lastname}`;
       
        h2.textContent = prophetName;
        card.appendChild(h2);

         dob.textContent = `Date of Birth:  ${prophet.birthdate}`;
        card.appendChild(dob);

        place.textContent = `Place of Birth: ${prophet.birthplace}`;
        card.appendChild(place);
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of  ${prophetName} President # ${prophet.order}`);
        portrait.setAttribute('loading', 'lazy');
        card.appendChild(portrait);

       
        document.querySelector('div.cards').appendChild(card);
   }

 