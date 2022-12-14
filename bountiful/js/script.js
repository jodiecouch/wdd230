function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    
    if ( document.querySelector('#drinks-ordered')){
         document.getElementById("drinks-ordered").classList.toggle("open");
         }    
}

const ham = document.getElementById("hamburgerBtn");

ham.onclick = toggleMenu;

/*last updated date*/
let modifyDate = new Date(document.lastModified).toLocaleString();
const dateModified = document.querySelector('#last-update');
dateModified.textContent = `Jodie Couch Last Updated: ${modifyDate}`;

/* code to display order counter */
if (document.querySelector("#special-drinks")){
const orderCountDisplay = document.querySelector("#special-drinks");

 orderCountDisplay.innerHTML = Number(window.localStorage.getItem("orderCount-ls"));

 /*
 let orderCount = Number(window.localStorage.getItem("orderCount-ls"));
if (orderCount !== 0){
    orderCountDisplay.innerHTML = orderCount;
}
else{
   orderCountDisplay.innerHTML =  '0';  
}
*/
}
