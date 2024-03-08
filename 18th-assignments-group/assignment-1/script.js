let fontFamily = document.querySelectorAll("select")[0];
let fontColor = document.querySelectorAll("select")[1];
let fontSize = document.querySelectorAll("select")[2];

// When you select an option, store it in the local storage and then apply it
fontFamily.onchange = function() {
    window.localStorage.setItem("fontFamily",fontFamily.value);
    document.body.style.fontFamily = fontFamily.value;
}
fontColor.onchange = function() {
    window.localStorage.setItem("fontColor",fontColor.value);
    document.body.style.color = fontColor.value;
}
fontSize.onchange = function() {
    window.localStorage.setItem("fontSize",fontSize.value);
    document.body.style.fontSize = fontSize.value;
}

// To let page saves changes even if the tab is closed or reload
document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
document.body.style.color = window.localStorage.getItem("fontColor");
document.body.style.fontSize = window.localStorage.getItem("fontSize");

// To let value be fixed on select box
fontFamily.value = window.localStorage.getItem("fontFamily");
fontColor.value = window.localStorage.getItem("fontColor");
fontSize.value = window.localStorage.getItem("fontSize");