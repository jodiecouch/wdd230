
function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const ham = document.getElementById("hamburgerBtn");

ham.onclick = toggleMenu;

/*header date*/
const today = new Date();
const longDay = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(today);
const headerDate = document.querySelector(".headerDate");
headerDate.innerHTML = `${longDay}`;

/*last updated date*/
let modifyDate = new Date(document.lastModified).toLocaleString();
const dateModified = document.querySelector('#last-update');
dateModified.textContent = `Last Updated: ${modifyDate}`;

/*copyright year*/
const copyright = document.querySelector('#copyright-year');
let currentYear = today.getFullYear();
copyright.textContent=`${currentYear}`;

/*join button or banner to display certain days of week*/
function toggleBanner(){
    document.getElementById("banner").classList.toggle("show");
}
const dow = today.getDay();
if (dow == 1 || dow == 2) {
    const banner = document.getElementById("banner");
    banner.textContent = `Come join us for the chamber meet and greet Wednesday at 7:00 pm.`;
    toggleBanner();
}

