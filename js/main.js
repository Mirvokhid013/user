let root = document.getElementById("root")

console.log(root);

root.setAttribute("class", 'text-center')

root.style.marginTop = '200px'

let elForm = document.createElement("form");
let elInput = document.createElement("input");
let btn = document.createElement("button");
let value = document.createElement("h1");

elInput.placeholder = 'Ismingizni kiriting: '

btn.textContent = 'Submit'

elForm.append(elInput, btn);

root.append(elForm, value);

value.style.fontSize = '200px'

elForm.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    elForm.style.display = 'none';

    value.innerHTML = `I ❤️ ${elInput.value}`;
    elInput.value = '';
})