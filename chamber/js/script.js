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
