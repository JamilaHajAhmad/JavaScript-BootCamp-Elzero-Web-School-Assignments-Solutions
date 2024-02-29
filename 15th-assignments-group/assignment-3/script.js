let dollarInput = document.forms[0].querySelector("[name = 'dollar']");
let result = document.getElementsByClassName("result")[0];
let resultText;
dollarInput.onmouseleave = function() {
    result.innerHTML = "";
    resultText = 
    document.createTextNode(`{${dollarInput.value}} USD Dollar =
    {${(dollarInput.value*15.6).toFixed(2)}} Egyptian Pound`);
    result.appendChild(resultText);
}

/*
Note that the content of input field can be brought by value attribute not by innerHTML or textContent
*/