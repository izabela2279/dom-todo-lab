const linkInput = document.getElementById("list")
const linkButton = document.getElementById("submit-button")
const linkUl = document.getElementById("todo-list")

linkButton.addEventListener("click", function(evt){
  const li = document.createElement("li")
  li.textContent = linkInput.value
  linkInput.text = ""
  linkUl.appendChild(li)
})