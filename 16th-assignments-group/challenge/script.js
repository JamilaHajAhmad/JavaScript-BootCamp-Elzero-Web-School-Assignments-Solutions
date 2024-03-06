let header = document.createElement("header");
header.className = "header";
header.style.cssText = "padding-top: 20px; padding-left: 20px; display: flex; padding-bottom: 20px; width: 100%;"
let logo = document.createElement("span");
logo.className = "logo";
logo.append("Elzero");
header.append(logo);
logo.style.cssText = "color: #5F5D9C; font-weight: bold; font-size: 25px; text-align: left; ";
let navBar = document.createElement("ul");
header.append(navBar);
navBar.style.cssText = "list-style-type: none; margin-left: 950px; margin-top: 5px; "
let link, linkContent = ['Home','About','Service','Contact'];
for(let i = 0; i < 4; i++) {
    link = document.createElement("li");
    link.append(linkContent[i]);
    navBar.append(link);
    link.style.cssText = "display: inline-block; margin-right: 8px; font-size: 20px; color: #6196A6; cursor: pointer"
}
document.body.style.cssText = "max-width: 100%; overflow-x: hidden;";
document.body.append(header);
let div = document.createElement("div");
div.className = "content";
div.style.cssText =
"background-color: #F0F3FF; display: grid; grid-template-columns: repeat(auto-fill,minmax(30%,1fr)); gap: 10px; padding: 10px; ";
let product,number,text;
for(let j = 1; j <= 15; j++) {
    product = document.createElement("div");
    product.className = "product";
    div.append(product);
    product.style.cssText = "background-color: #FEECE2; padding: 5px 20px; text-align: center; border: 1px solid #337357; border-radius: 3px";
    number = document.createElement("p");
    number.innerHTML = `${j}`;
    product.append(number);
    number.style.cssText = "font-size: 30px; color: #FF407D; margin-bottom: 5px; font-weight: bold;";
    text = document.createElement("p");
    text.innerHTML = "Product";
    text.style.cssText = "color: #0C359E";
    product.append(text);
}
document.body.append(div);
let footer = document.createElement("footer");
footer.className = "footer";
let footerText = document.createTextNode(`CopyRights 2024`);
footer.append(footerText);
footer.style.cssText =
"color: white; background-color: #59B4C3; width: 100%; text-align: center; padding: 7px 60px; height: 30px; font-weight: bold; font-size: 20px";
document.body.append(footer);



