var newItemCounter = 1;
var mylist = document.getElementById("mylist");
var button = document.getElementById("btn");
var title = document.getElementById("headline");
var listItems = document.getElementById("mylist").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}
function activateItem() {
    title.innerHTML = this.innerHTML;
    for (i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
    this.classList.add("active");
}

button.addEventListener("click", createNewItems);

function createNewItems() {
    mylist.innerHTML += "<li>New Item " + newItemCounter + "</li>";
    newItemCounter++;
}