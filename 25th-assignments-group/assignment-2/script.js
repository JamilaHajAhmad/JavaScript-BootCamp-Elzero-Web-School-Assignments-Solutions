async function fetchData() {
    let data = await fetch("./articles.json")
    data = await data.json();
    data.length = 5;
    for(let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerHTML = data[i].title;
        div.append(h3);
        let p = document.createElement("p");
        p.innerHTML = data[i].description;
        div.append(p);
        document.body.append(div);
    }
}
fetchData();

