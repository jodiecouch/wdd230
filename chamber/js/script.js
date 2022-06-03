function toggleMenu(){
    /*console.log("You made it baby!");*/
    document.getElementById("primaryNav").classList.toggle("open"); /*this toggles, adding/removing, a class labeled 'open' to our element*/
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

/*header date*/
const today = new Date();
const longDay = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(today);
const headerDate = document.querySelector(".headerDate");
headerDate.innerHTML = `<em>${longDay}</em>`;

/*last updated date*/
let modifyDate = new Date(document.lastModified).toLocaleString();
const dateModified = document.querySelector('#last-update');
dateModified.textContent = `Last Updated: ${modifyDate}`;

/*copyright year*/
const copyright = document.querySelector('#copyright-year');
let currentYear = today.getFullYear();
copyright.textContent=`${currentYear}`;

