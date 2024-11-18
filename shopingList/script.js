const ulParent = document.querySelector("body>ul");
const input = document.querySelector("input");
const buttoninsert = document.getElementById("inputBtn");

function buttonSort() {
  const currentValue = input.value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  const dbutton = document.createElement("button");
  span.textContent = currentValue;
  dbutton.textContent = "Delete";
  li.appendChild(span);
  li.appendChild(dbutton);
  ulParent.appendChild(li);
  input.value = "";
  function removeItem() {
    li.parentNode.removeChild(li);
  }

  dbutton.addEventListener("click", removeItem);
}

buttoninsert.addEventListener("click", buttonSort);
