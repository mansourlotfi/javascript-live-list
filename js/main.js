var newItemCounter = 1;
var mylist = document.getElementById("mylist");
var button = document.getElementById("btn");
var title = document.getElementById("headline");
var listItems = document.getElementById("mylist").getElementsByTagName("li");

mylist.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        title.innerHTML = e.target.innerHTML;
        for (i=0; i<e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
        }
    }

button.addEventListener("click", createNewItems);

function createNewItems() {
    mylist.innerHTML += "<li>New Item " + newItemCounter + "</li>";
    newItemCounter++;
}