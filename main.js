const buttonAdd = document.querySelector("button");
const task = document.getElementById("taskInput");
const tasks = document.querySelector("tasks");

function addtask() {
  const taskvalue = task.value;
  result = `
  <div class="task">
  <input type="checkbox" class="check" onclick="deleteTask(this)">
  <li>${taskvalue}</li>
  </div>
  `;

  document.querySelector(".tasks").innerHTML += result;
}
function deleteTask(checkbox) {
  const item = checkbox.parentElement.querySelector("li");
  if (checkbox.checked) {
    item.classList.add("deletetask");
  } else {
    item.classList.remove("deletetask");
  }
}
