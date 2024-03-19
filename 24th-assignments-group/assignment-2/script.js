let myRequest = new XMLHttpRequest();
myRequest.open("GET","../assignment-1/articles.json");
myRequest.send();
myRequest.onreadystatechange = function() {
    if(myRequest.readyState === 4 && myRequest.status === 200) {
        console.log(JSON.parse(myRequest.response));
    }
}
myRequest.onloadend = () => console.log("Data Loaded");
// Needed Output

// "JSON Object Content Here"
// "Data Loaded"