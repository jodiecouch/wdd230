
      const list = document.querySelector("ul");
      const item = document.querySelector("input");
      const button = document.querySelector("button");

      button.addEventListener("click", () => {
        const verse = item.value;
        item.value = "";

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = verse;
        listItem.appendChild(listBtn);
        listBtn.textContent = "";
        listBtn.setAttribute("class","delete");
        list.appendChild(listItem);

        listBtn.addEventListener("click", () => {
          list.removeChild(listItem);
        });

        item.focus();
      });
    