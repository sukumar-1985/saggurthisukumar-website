const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");
const btn = document.querySelector("#btn");

function createTask() {
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "&#10006";
  li.appendChild(span);
  inputBox.value = "";
}

btn.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Enter some Text");
  } else {
    createTask();
    saveData();
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && inputBox.value !== "") {
    createTask();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
