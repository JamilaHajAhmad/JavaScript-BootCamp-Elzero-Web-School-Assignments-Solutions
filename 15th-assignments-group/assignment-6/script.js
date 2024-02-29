let numberField = document.querySelector("[type = 'number']");
let textField = document.querySelector("[type = 'text']");
let selectList = document.querySelector("[name = 'type']");
let createBtn = document.querySelector("[type = 'submit']");
let result = document.querySelector(".results");
let createdElement;
let textContentOfElement;

createBtn.onclick = function(event) {
    event.preventDefault();
    document.querySelectorAll(".box").forEach(function(element) {
        element.remove();
    })
    for(let i = 1; i <= numberField.value; i++) {
        createdElement = document.createElement(`${selectList.value}`);
        textContentOfElement = document.createTextNode(`${textField.value}`);
        createdElement.appendChild(textContentOfElement);
        createdElement.setAttribute("class","box");
        createdElement.setAttribute("title","element");
        createdElement.setAttribute("id",`id-${i}`);
        result.appendChild(createdElement);
        document.body.appendChild(result);
        createdElement.style.padding = "10px 20px";
        createdElement.style.width = "250px";
        createdElement.style.color = "white";
        createdElement.style.backgroundColor = "#FFB5DA";
        createdElement.style.textAlign = "center";
    }
}
