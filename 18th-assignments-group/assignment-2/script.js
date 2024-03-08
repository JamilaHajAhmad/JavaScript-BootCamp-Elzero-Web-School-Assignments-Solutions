let inputFields = document.querySelectorAll("input");
let selectBox = document.querySelector("select");

inputFields.forEach((inputField)=>{
    inputField.onblur = function() {
        window.sessionStorage.setItem(`input-${inputField.getAttribute("name")}`,inputField.value);
    }
    inputField.value = window.sessionStorage.getItem(`input-${inputField.getAttribute("name")}`);
})
selectBox.onchange = function() {
    window.sessionStorage.setItem("selectOption",selectBox.value);
}
selectBox.value = window.sessionStorage.getItem("selectOption");