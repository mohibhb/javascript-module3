var areaURL = 'https://code-your-future.github.io/api-demo/area/index.json';

function getData(address, dealWithData) {
    var http = new XMLHttpRequest()
    http.open('GET', address)
    http.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // first we get data from server
            var data = this.responseText;
            // convert data from string JSON to JSON
            var jsonData = JSON.parse(data);
            // call the dealWithData callback function
            dealWithData(jsonData.data);
        }
    }
    http.send(); // Make the request
}

function makeOrganisationURL(area) {
    return 'https://code-your-future.github.io/api-demo/area/' + area + '/index.json';
}

function logData(data) {
    console.log(data);
}

function displayOrganisation(organisationInfo) {
    console.info(organisationInfo);
    var areaContent = '';
// website:
// email : 
// area: 
// process: Contact for information
// organisation: New Horizon Youth Centre
// clients: Young people - 16-25
// days: N/A
// telephone: 020 7388 5560
// services: Legal, housing, benefits, jobs, education
// borough: Camden
// type: YP-Families

    areaContent = '<div class=\'box\'>'
    areaContent += '<h1>' + organisationInfo.organisation + '</h1>';
    areaContent += '<a href=' + organisationInfo.website + '>website</a>';
    areaContent += '</div>'
    document.getElementById('areaInfo').innerHTML = areaContent;

}

function displayAreaInfo(areaInfo) {
    for (info in areaInfo) {
        displayOrganisation(areaInfo[info]);
    }
}

function areaButtonClick(event) {
    if (event) {
        var areaName = event.target.textContent;
        var areaInfoURL = makeOrganisationURL(areaName);
        getData(areaInfoURL, displayAreaInfo)
    }
}

function addButtonsForAreas(areas) {
    var areas = areas;
    for (area in areas) {
        addAreaButton(areas[area]);
    }
}

function loadPage() {
    // console.info('Our file is now loaded');
    getData(areaURL, addButtonsForAreas)

}

    
function addAreaButton(areaName) {
    var btn = document.createElement("BUTTON");
    var text = document.createTextNode(areaName);
    btn.appendChild(text);
    btn.onclick = areaButtonClick.bind(this);
    document.getElementById("areaButtons").appendChild(btn);
}