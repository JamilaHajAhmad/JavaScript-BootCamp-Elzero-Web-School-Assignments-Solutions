for(let i = 0; i < document.body.children.length-1; i++) {
    document.body.children[i].onclick = function() {
        console.log(`This Is ${document.body.children[i].nodeName.toLowerCase()}`);
    }
}
// element.nodeName gives you the tag name of the html element in UpperCase