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
dateModified.textContent = `Last Updated: ${modifyDate}`;