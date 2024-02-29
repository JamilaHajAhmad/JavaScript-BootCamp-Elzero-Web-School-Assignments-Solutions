for(let i = 0; i < document.querySelectorAll("img").length; i++) {
    let myImg = document.querySelectorAll("img")[i];
    if(myImg.hasAttribute("alt")) {
        myImg.alt = "Old";
    }
    else {
        myImg.alt = "Elzero New";
    }
}