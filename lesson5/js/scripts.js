const button = document.querySelector("button");
const item = document.querySelector("input");
const list = document.querySelector("ul");

button.addEventListener("click", () =>{
    const chapter = item.value;
    item.value = "";
    if (chapter.trim().length !==0){
       
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = chapter;
    listItem.appendChild(listBtn);
    listBtn.textContent="X";
    listBtn.setAttribute("class", "delete");
    list.appendChild(listItem);

    listBtn.addEventListener("click", () =>{
        list.removeChild(listItem);
    });
    }
    
    item.focus();
})