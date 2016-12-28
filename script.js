var jsonString;
var http = new XMLHttpRequest()

// Specify the Method and the URL we want to access
http.open('GET', 'https://code-your-future.github.io/api-demo/area/index.json')

// Function to be called as the request happens
http.onreadystatechange = function() {
    // readyState === 4 means the request has finished (http://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)
    // status === 200  means the request was OK
    if (this.readyState === 4 && this.status === 200) {
        jsonString = (this.responseText); // The body returned by the server (as a string)
    
    Print();
    }
}

http.send(); // Make the request
function Print() {
var myObject = JSON.parse(jsonString);
for (var key in myObject){
    myFunction(myObject[key][i]);
	for (var i in myObject[key]) {
	myFunction(myObject[key][i]);
}
}

}
	
function myFunction(t) {
    var btn = document.createElement("BUTTON");
    var text = document.createTextNode(t);
    btn.appendChild(text);
    document.getElementById("continer").appendChild(btn);
}
