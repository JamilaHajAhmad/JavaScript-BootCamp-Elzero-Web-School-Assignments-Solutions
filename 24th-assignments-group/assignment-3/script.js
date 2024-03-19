let request = new XMLHttpRequest();
request.open("GET","../assignment-1/articles.json");
request.send();

request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(request.response);
        for(let i = 0; i < mainData.length; i++) {
            mainData[i]["Section"] = "All";
        }
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
    
}
