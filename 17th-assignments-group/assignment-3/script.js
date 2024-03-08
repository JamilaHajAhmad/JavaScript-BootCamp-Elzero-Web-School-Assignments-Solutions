let div = document.querySelector("div");

let counter = () => {
    if(div.innerHTML > 0) {
        div.innerHTML = div.innerHTML - 1;
    }
}

setInterval(counter,1000);