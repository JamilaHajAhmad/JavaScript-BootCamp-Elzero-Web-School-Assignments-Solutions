let spans = document.querySelectorAll("span");
let div = document.querySelector(".largest");

spans.forEach(function(span) {
    span.onclick = (event) => {
        spans.forEach(function(span) {
            span.classList.remove("active");
        })
        event.currentTarget.classList.add("active");
        window.localStorage.setItem("color",event.currentTarget.dataset.color);
        div.style.backgroundColor =  event.currentTarget.getAttribute("data-color");
    }
})

