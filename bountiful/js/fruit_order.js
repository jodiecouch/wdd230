const data = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const list1 = document.querySelector('#fruit1');
const list2 = document.getElementById('fruit2');
const list3 = document.getElementById('fruit3');
var fruit;
var counter = 0;

fetch(data)
  .then(response => response.json())
  .then(json => {
   // console.log(json)
    fruit = json;
    fruit.forEach(x=>fillList(x, list1));
    counter=0;
    fruit.forEach(x=>fillList(x, list2));
    counter=0;
    fruit.forEach(x=>fillList(x, list3));

});

function fillList(fruit, selectList){
    //create the option
    let opt = document.createElement('option');
    //opt.value = fruit.id;
    opt.value = counter;
    opt.innerHTML = fruit.name;
    selectList.appendChild(opt);
    counter++;

}

document.getElementById('fresh-form').addEventListener('submit', function(event){
    event.preventDefault();
    const form = event.target;
    const fields = form.elements;

    

    displayOrderResults(fields);
    
    /*console.log(fruit1.nutritions);
    console.log(fruit2.nutritions);
    console.log(fruit3.nutritions);*/
    

}, false);

function displayOrderResults(fields){
    const name = fields.fName.value;
    const email = fields.email.value;
    const phone = fields.cell.value;
    const fruit1 = fruit[fields.fruit1.value];
    const fruit2 = fruit[fields.fruit2.value];
    const fruit3 = fruit[fields.fruit3.value];

   let display = document.getElementById('order-results');
    //header
    let header = document.createElement('h2');
    header.innerHTML="Order Received"
    display.appendChild(header);
    //name
    let nameP = document.createElement('p');
    nameP.classList.add('label');
    nameP.innerText = `Name: ${name}`;
    display.appendChild(nameP);
    //email
    let emailP = document.createElement('p');
    emailP.classList.add('label');
    emailP.innerText = `Email: ${email}`;
    display.appendChild(emailP);
    //phone
    let phoneP = document.createElement('p');
    phoneP.classList.add('label');
    phoneP.innerText = `Phone: ${phone}`;
    display.appendChild(phoneP);
    //instructions
    /*
    let instructionsP = document.createElement('p');
    instructionsP.classList.add('label');
    instructionsP.innerText = 'Add instructions to form';
    display.appendChild(instructionsP);
    */
    //fruit1
    let fruit1P = document.createElement('p');
    fruit1P.classList.add('fruit-card');
    //fruit1P.innerText = JSON.stringify(fruit1.nutritions);

    display.appendChild(fruit1P);
    
    //fruit2
    let fruit2P = document.createElement('p');
    fruit2P.classList.add('fruit-card');
    //fruit2P.innerHTML = `Option Two: ${fruit2.name}<br>Nutrition: ${JSON.stringify(fruit1.nutritions)}`;
    display.appendChild(fruit2P);
    //fruit3
    //let fruitString = createNutritionString(fruit3.nutritions);
    let fruitString = createFruitHtml(fruit3);
    let fruit3P = document.createElement('p');
    fruit3P.classList.add('fruit-card');
    fruit3P.innerHTML = fruitString;
    display.appendChild(fruit3P);
    //total nutrition
    let totalP = document.createElement('p');
    totalP.classList.add('fruit-card');
    totalP.setAttribute('id','total-nutrition');
    totalP.innerText = 'Need to add it all together';
    display.appendChild(totalP);

}

function createNutritionString(item){
    let str = `Carbohydrates: ${item.carbohydrates} Protein: ${item.protein} Fat: ${item.fat}
    Calories: ${item.calories} Sugar: ${item.sugar}`
    return str;
}
function createFruitHtml(item){
    let str = createNutritionString(item.nutritions);
    let p = `<p>Option X: ${item.name}</p><p>${str}</p>`;
    return p;
    console.log(p);
    ;
}