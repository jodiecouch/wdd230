const data = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const list1 = document.querySelector('#fruit1');
const list2 = document.getElementById('fruit2');
const list3 = document.getElementById('fruit3');

fetch(data)
  .then(response => response.json())
  .then(json => {
   // console.log(json)
   const fruit = json;
   fruit.forEach(x=>fillList(x, list1));
   fruit.forEach(x=>fillList(x, list2));
   fruit.forEach(x=>fillList(x, list3));
});

function fillList(fruit, selectList){
    //create the option
    let opt = document.createElement('option');
    opt.value = fruit.id;
    opt.innerHTML = fruit.name;
    selectList.appendChild(opt);
    

}
