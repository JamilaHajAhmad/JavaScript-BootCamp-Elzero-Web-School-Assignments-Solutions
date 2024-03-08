let div = document.querySelector("div");

let counter = () => {

    if(div.innerHTML > 0) {
        div.innerHTML = div.innerHTML - 1;
    }
    if(div.innerHTML == 5) {
        window.open("https:\\elzero.org","_blank","width=400,height=400,left=200,top=200");
    }
    
}

setInterval(counter,1000);