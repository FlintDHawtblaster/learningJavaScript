const shoppingList = document.querySelector("ul");
const textBox = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const shoppingItem = textBox.value;
    textBox.value = "";

    const listItem = document.createElement("li");
    const spanElement = document.createElement("span");
    const deleteButton = document.createElement("button");
    listItem.appendChild(spanElement);
    listItem.appendChild(deleteButton);

    spanElement.textContent = shoppingItem;
    deleteButton.textContent = "Delete";

    shoppingList.appendChild(listItem);

    deleteButton.onclick = () => {
        listItem.remove();
    }

    textBox.focus();
});


