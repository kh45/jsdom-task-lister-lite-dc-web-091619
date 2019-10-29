document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener("submit", handleForm)
});

const list = document.getElementById('tasks');

function handleForm(event){
  event.preventDefault();
  let newTask = document.querySelector("#new-task-description").value;
  addTask(newTask);
  event.target.reset()
}

function addTask(newTask){
  let liElem = document.createElement("li");
  list.appendChild(liElem);

  liElem.innerText = newTask
}
