const cards = document.querySelectorAll(".card");//node list of cards
const lists = document.querySelectorAll(".list"); //nodelist of all list

for (const card of cards) {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
}


function dragStart(e) {

    // this allows the drop location to know which element is being moved when you release it

    e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
    console.log("Drag ended");
}

function dragOver(e) {
    // this line is important because by  default, browers don't allow you to drop elements onto other elements.

    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault();

    this.classList.add("over");
}

function dragLeave(e) {

    this.classList.remove("over");
}

function dragDrop(e) {

    const id = e.dataTransfer.getData("text/plain");

    const card = document.getElementById(id);

    this.appendChild(card);

    this.classList.remove("over");
}
