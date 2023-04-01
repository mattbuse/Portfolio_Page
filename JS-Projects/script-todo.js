let toDoArray = [];
let completedArray = [];

function addToList() {
    itemText = document.getElementById('input').value;
    if (itemText) { 
        toDoArray.push(itemText);
    }
    console.log(toDoArray);
}

console.log(toDoArray);

let addItem = document.getElementById('submit');

addItem.addEventListener('click',addToList);