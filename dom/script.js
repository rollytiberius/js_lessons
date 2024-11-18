const firstPtag = document.createElement("p");
const body = document.querySelector("body");

firstPtag.style.color = "red";

firstPtag.textContent = "Hey Im red";

body.appendChild(firstPtag);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I m a blue H3";
body.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background-color: pink");
body.appendChild(div);

const h1 = document.createElement("h1");
h1.innerText = "I m in a div";
div.appendChild(h1);

const p = document.createElement("p");
p.innerText = "ME TOO";
div.appendChild(p);

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
