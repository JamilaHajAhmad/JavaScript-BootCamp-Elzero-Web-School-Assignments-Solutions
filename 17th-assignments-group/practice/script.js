let btn = document.body.children[0];

window.onscroll = () => {
    if(window.scrollY >= 800) {
        btn.style.display = 'block';
    }
    
}
btn.onclick = function() {
    window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0
    })
}