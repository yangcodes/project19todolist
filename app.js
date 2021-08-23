const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// ---------------------------------------------------------------

// selecting the icon class names
const checkBtn = "fa-check-circle";
const uncheckBtn = "fa-circle-thin";
const textLineThrough = "line-through";

//to do container
let toDoContainer = [];
letid = 0;

//add to do function
function addToDo(toDo, id, done, trash) {
  const toDoDone = done ? checkBtn : uncheckBtn;
  const toDoLine = done ? textLineThrough : "";

  const item = `
   <li class="item">
   <i class="fa ${toDoDone} complete" status ="complete" id="${id}"></i>
   <p class="text ${toDoLine}">${toDo}</p>
   <i class="fa fa-trash-o delete" status="delete" id="${id}"></i>
   </li>
  `;
}
