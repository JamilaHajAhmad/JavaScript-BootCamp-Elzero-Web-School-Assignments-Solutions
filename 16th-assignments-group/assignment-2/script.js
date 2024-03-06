let inputAdd = document.querySelector(".classes-to-add");
let inputRemove = document.querySelector(".classes-to-remove");
let inputText = document.querySelector("[type='text']");
let inputAddContent,inputRemoveContent;
let resultDiv = document.querySelector(".classes-list").lastElementChild;
let spanInResultDiv,nextSpan;

inputAdd.onblur = function() {
    if(inputAdd.value.includes(" ")) {
        spanInResultDiv = document.createElement("span");
        inputAddContent = inputAdd.value.toLowerCase();
        spanInResultDiv.setAttribute("class",inputAddContent.split(" ")[0]);
        nextSpan = document.createElement("span");
        nextSpan.setAttribute("class",inputAddContent.split(" ")[1])
        spanInResultDiv.append(inputAddContent.split(" ")[0]);
        nextSpan.append(inputAddContent.split(" ")[1]);
        resultDiv.appendChild(spanInResultDiv);
        resultDiv.append(nextSpan);
        inputAdd.value = "";
    }
    else {
        inputAddContent = inputAdd.value.toLowerCase();
        spanInResultDiv = document.createElement("span");
        spanInResultDiv.setAttribute("class",inputAddContent);
        spanInResultDiv.append(inputAddContent);
        resultDiv.append(spanInResultDiv);
        inputAdd.value = "";
    }
}

inputRemove.onblur = function() {
    inputRemoveContent = inputRemove.value;
    for(let i = 0; i < document.querySelectorAll("span").length; i++) {
        if(document.querySelectorAll("span")[i].classList.contains(inputRemoveContent)) {
            document.querySelectorAll("span")[i].remove();
        }
    }
    if(resultDiv.innerHTML == "") {
        resultDiv.textContent = "No Classes To Show!!!";
    }
}




