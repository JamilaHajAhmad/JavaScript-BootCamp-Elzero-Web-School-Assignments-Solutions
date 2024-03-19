let getData = () => {
    return new Promise((resolve,reject) => {
        let request = new XMLHttpRequest();
        request.onload = function() {
            if(this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            }
            else {
                reject(Error("Data is not found!!!"));
            }
        }
        request.open("GET","./articles.json");
        request.send();
    })
    
}
getData().then(
    function(resolvedValue) {
        resolvedValue.length = 5;
        for(let i = 0; i < resolvedValue.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            h3.innerHTML = resolvedValue[i].title;
            div.append(h3);
            let p = document.createElement("p");
            p.innerHTML = resolvedValue[i].description;
            div.append(p);
            document.body.append(div);
        }
    }
)