function toggleMenu(){
    /*console.log("You made it baby!");*/
    document.getElementById("primaryNav").classList.toggle("open"); /*this toggles, adding/removing, a class labeled 'open' to our element*/
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;