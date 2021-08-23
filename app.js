const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// ---------------------------------------------------------------

// selecting the icon class names
const checkBtn = "fa-check-circle";
const uncheckBtn = "fa-circle-thin";
const textLineThrough = "line-through";
// ------------------------------------------------------------
//to do container
let toDoContainer = [];
let id = 0;
// ------------------------------------------------------------------

//add to do function
function addToDo(toDo, id, done, trash) {
  if (trash) return;
  const toDoDone = done ? checkBtn : uncheckBtn;
  const toDoLine = done ? textLineThrough : "";

  const item = `
   <li class="item">
   <i class="fa ${toDoDone} complete" status ="complete" id="${id}"></i>
   <p class="text ${toDoLine}">${toDo}</p>
   <i class="fa fa-trash-o delete" status="delete" id="${id}"></i>
   </li>
  `;
  const toDoItemPosition = "beforeend";
  toDoList.insertAdjacentHTML(toDoItemPosition, item);
}
//addToDo("walk the talk", 0, false, false);
//addToDo("walk the talk", 0, true, false);
//addToDo("walk the talk", 0, true, true);
// ----------------------------------------------------------------------------------------------

//adding a to-do the list when the enter key is pressed
document.addEventListener("keyup", displayToDo);

//adding a to-do to the list when the icon is clicked
toDoAddBtn.addEventListener("click", displayToDo);

//displaytoDo function
function displayToDo(event) {
  if (
    event.keyCode === 13 ||
    event.target.classList.value === "fa fa-plus-circle"
  ) {
    const toDo = input.value;
    //checking whether the input field is NOT empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      toDoContainer.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      id++;
    }
    input.value = "";
  }
}
//-------------------------------------------------------------------

//when a to do is completed
function completeToDo(toDoItem) {
  toDoItem.classList.toggle(checkBtn);
  toDoItem.classList.toggle(uncheckBtn);
  toDoItem.parentNode.querySelector(".text").classList.toggle(textLineThrough);

  toDoContainer[toDoItem.id].done = toDoContainer[toDoItem.id].done
    ? false
    : true;
}

//when a to do is removed
function removeToDo(toDoItem) {
  toDoItem.parentNode.parentNode.removeChild(toDoItem.parentNode);
  toDoContainer[toDoItem.id].trash = true;
}

//targeting the dynamically created to do items
toDoList.addEventListener("click", function (evt) {
  if (
    evt.path[0].localName === "p" ||
    evt.path[0].localName === "li" ||
    evt.path[0].localName === "ul"
  )
    return;

  const toDoItem = evt.target;
  const toDoStatus = toDoItem.attributes.status.value;
  //console.log(toDoStatus);

  if (toDoStatus === "complete") {
    completeToDo(toDoItem);
  } else if (toDoStatus === "delete") {
    removeToDo(toDoItem);
  }
});
