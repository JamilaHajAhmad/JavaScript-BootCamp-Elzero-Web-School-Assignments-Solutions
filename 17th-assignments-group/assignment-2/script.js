let popUpMessage = document.querySelector(".popUp");

setTimeout(function() {
    popUpMessage.style.display = 'block';
},5000)

let closeButton = document.querySelector("span");
closeButton.onclick = () => {
    popUpMessage.style.display = 'none';
}