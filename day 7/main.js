const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector(".to-do-input");
const pendingList = document.querySelector(".pending-list");
const finishedList = document.querySelector(".finished-list");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";
let pendingToDos = [];
let finishedToDos = [];

const saveToDos = () => {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingToDos));
};

const selectToDos = (GET_LS, idxNum) => {
  const GET_TODO = JSON.parse(localStorage.getItem(GET_LS)).splice(idxNum, 1);
  const SET_TODO = JSON.stringify(GET_TODO);
  return SET_TODO;
};

const paintToDo = (text) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendingToDos.length + 1;
  const toDosObj = {
    text: text,
    id: newId,
  };

  delBtn.classList.add("del-btn");
  checkBtn.classList.add("pending-check-btn");

  delBtn.textContent = "❌";
  checkBtn.textContent = "⏬";
  span.textContent = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);

  li.id = newId;
  pendingList.appendChild(li);
  pendingToDos.push(toDosObj);
  saveToDos();
};

const clickHanlder = (e) => {
  const toDoBtn = e.target;
  const toDoItem = toDoBtn.parentNode;
  const toDoList = toDoItem.parentNode;
  const currentIdx = toDoItem.id - 1;
  console.log(currentIdx);
  //del-btn
  if (toDoBtn.classList.contains("del-btn")) {
    toDoList.removeChild(toDoItem);

    const cleanToDos = toDos.filter(
      (toDo) => toDo.id !== parseInt(toDoItem.id),
    );
    toDos = cleanToDos;
    saveToDos();
  }
  //pending-check-btn
  if (toDoBtn.classList.contains("pending-check-btn")) {
    finishedList.appendChild(toDoItem);
    toDoBtn.textContent = "⏫";
    setTimeout(() => {
      toDoBtn.setAttribute("class", "finished-check-btn");
    }, 10);
    selectToDos(PENDING_LS, currentIdx);
  }
  //finished-check-btn
  if (toDoBtn.classList.contains("finished-check-btn")) {
    pendingList.appendChild(toDoItem);
    toDoBtn.textContent = "⏬";
    setTimeout(() => {
      toDoBtn.setAttribute("class", "pending-check-btn");
    }, 10);
    selectToDos(FINISHED_LS, currentIdx);
  }
};

const submitHanlder = (e) => {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
};

toDoForm.addEventListener("submit", submitHanlder);
window.addEventListener("click", clickHanlder);

// import "./styles.css";

// const pendingList = document.getElementById("js-pending"),
//   finishedList = document.getElementById("js-finished"),
//   form = document.getElementById("js-form"),
//   input = form.querySelector("input");

// const PENDING = "PENDING";
// const FINISHED = "FINISHED";

// let pendingTasks, finishedTasks;

// function getTaskObject(text) {
//   return {
//     id: String(Date.now()),
//     text
//   };
// }

// function savePendingTask(task) {
//   pendingTasks.push(task);
// }

// function findInFinished(taskId) {
//   return finishedTasks.find(function(task) {
//     return task.id === taskId;
//   });
// }

// function findInPending(taskId) {
//   return pendingTasks.find(function(task) {
//     return task.id === taskId;
//   });
// }

// function removeFromPending(taskId) {
//   pendingTasks = pendingTasks.filter(function(task) {
//     return task.id !== taskId;
//   });
// }

// function removeFromFinished(taskId) {
//   finishedTasks = finishedTasks.filter(function(task) {
//     return task.id !== taskId;
//   });
// }

// function addToFinished(task) {
//   finishedTasks.push(task);
// }

// function addToPending(task) {
//   pendingTasks.push(task);
// }

// function deleteTask(e) {
//   const li = e.target.parentNode;
//   li.parentNode.removeChild(li);
//   removeFromFinished(li.id);
//   removeFromPending(li.id);
//   saveState();
// }

// function handleFinishClick(e) {
//   const li = e.target.parentNode;
//   li.parentNode.removeChild(li);
//   const task = findInPending(li.id);
//   removeFromPending(li.id);
//   addToFinished(task);
//   paintFinishedTask(task);
//   saveState();
// }

// function handleBackClick(e) {
//   const li = e.target.parentNode;
//   li.parentNode.removeChild(li);
//   const task = findInFinished(li.id);
//   removeFromFinished(li.id);
//   addToPending(task);
//   paintPendingTask(task);
//   saveState();
// }

// function buildGenericLi(task) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const deleteBtn = document.createElement("button");
//   span.innerText = task.text;
//   deleteBtn.innerText = "❌";
//   deleteBtn.addEventListener("click", deleteTask);
//   li.append(span, deleteBtn);
//   li.id = task.id;
//   return li;
// }

// function paintPendingTask(task) {
//   const genericLi = buildGenericLi(task);
//   const completeBtn = document.createElement("button");
//   completeBtn.innerText = "✅";
//   completeBtn.addEventListener("click", handleFinishClick);
//   genericLi.append(completeBtn);
//   pendingList.append(genericLi);
// }

// function paintFinishedTask(task) {
//   const genericLi = buildGenericLi(task);
//   const backBtn = document.createElement("button");
//   backBtn.innerText = "⏪";
//   backBtn.addEventListener("click", handleBackClick);
//   genericLi.append(backBtn);
//   finishedList.append(genericLi);
// }

// function saveState() {
//   localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
//   localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
// }

// function loadState() {
//   pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
//   finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
// }

// function restoreState() {
//   pendingTasks.forEach(function(task) {
//     paintPendingTask(task);
//   });
//   finishedTasks.forEach(function(task) {
//     paintFinishedTask(task);
//   });
// }

// function handleFormSubmit(e) {
//   e.preventDefault();
//   const taskObj = getTaskObject(input.value);
//   input.value = "";
//   paintPendingTask(taskObj);
//   savePendingTask(taskObj);
//   saveState();
// }

// function init() {
//   form.addEventListener("submit", handleFormSubmit);
//   loadState();
//   restoreState();
// }
// init();

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//   </head>

//   <body>
//     <h1>Tasks</h1>

//     <form id="js-form">
//       <input type="text" placeholder="Add task" />
//     </form>

//     <div>
//       <h3>Pending</h3>
//       <ul id="js-pending"></ul>
//     </div>

//     <div>
//       <h3>Finished</h3>
//       <ul id="js-finished"></ul>
//     </div>

//     <script src="src/index.js"></script>
//   </body>
</html>
