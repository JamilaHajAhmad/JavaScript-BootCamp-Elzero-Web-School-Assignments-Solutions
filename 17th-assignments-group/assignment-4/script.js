let div = document.querySelector("div");

let counter = () => {

    if(div.innerHTML > 0) {
        div.innerHTML = div.innerHTML - 1;
    }
    else {
        clearInterval(interval);
        window.open("https:\\elzero.org","_self");
    }
    
}
let interval = setInterval(counter,1000);

