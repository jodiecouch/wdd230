
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
    /*document.getElementById("banner").classList.toggle("show");*/
    document.getElementById("flash").classList.toggle("show");
}   
const dow = today.getDay();
if (dow == 1 || dow == 2) {
    /*const banner = document.getElementById("banner");
    banner.textContent = `Come join us for the chamber meet and greet Wednesday at 7:00 pm.`;
    */
    toggleBanner();
}

/*code for lazy loading with intersector */

const imgOptions ={
    threshold: 1,
    rootMargin : "0px 0px 100px 0px"
};

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

/* code for visit counter */
const visitLabel = document.querySelector(".visits-label");

let visits = Number(window.localStorage.getItem("visits-ls"));

if (visits !== 0){
    visitLabel.innerHTML = `Welcome back. Visit number: ${visits}`;
}
else{
   visitLabel.innerHTML =  'Welcome. This is your first visit.';   
}

visits++;