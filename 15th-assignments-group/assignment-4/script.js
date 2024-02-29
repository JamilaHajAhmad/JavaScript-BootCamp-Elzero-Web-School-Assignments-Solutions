let div1 = document.querySelectorAll("div")[0];
let div2 = document.querySelectorAll("div")[1];
let div1Content = div1.innerHTML;
let div2Content = div2.innerHTML;

div1.setAttribute("title",div1.className);
div2.setAttribute("title",div2.className);
div2.innerHTML = div1Content + " " + "2";
div1.innerHTML = div2Content;





