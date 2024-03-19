let request = new XMLHttpRequest();
request.open("GET","../assignment-1/articles.json");
request.send();

request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(request.response);
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute("id","data");
        document.body.appendChild(parentDiv);
        for(let j = 0; j < mainData.length; j++) {
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            h2.innerHTML = mainData[j]["Author"];
            div.appendChild(h2);
            let p1 = document.createElement("p");
            p1.innerHTML = mainData[j]["Section"];
            div.appendChild(p1);
            let p2 = document.createElement("p");
            p2.innerHTML = mainData[j]["Address"];
            div.appendChild(p2);
            let p3 = document.createElement("p");
            p3.innerHTML = mainData[j]["Content"];
            div.appendChild(p3);
            parentDiv.appendChild(div);
        }
    }
}
