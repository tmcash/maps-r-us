const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";

const buttonsEl = document.querySelector(".btn-city");
let selectValue = document.querySelector("#city");

//setting up the cities and their lat/long
cityLookup = {
    "Charleston": "32.7876,-79.9402",
    "Santa Fe": "35.6876,-105.9384",
    "Savannah": "32.0564,-81.0951",
    "New Orleans": "29.9759,-90.0782",
    "NYC": "40.7127,-74.0060",
    "San Antonio": "29.4246,-98.4951",
    "Chicago": "41.8755,-87.6244",
    "Portland": "45.5202,-122.6741",
    "Williamsburg": "37.2708,-76.7074",
    "Honolulu": "21.3045,-157.8556"
}

let selectList = selectValue;

for (let key in cityLookup) {
    let option = document.createElement("option");
    option.value = cityLookup[key];
    option.text = key;
    selectList.add(option);
}

//assiging a lat/long to each city so it can be used in the api query
let buttonClickHandler = function(event) {

    let city = event.target.value;

    getCity(city);
}

let getCity = function(city) {
    let queryURL ="https://places.ls.hereapi.com/places/v1/discover/explore?&at=" + city + "&cat=sights-museums&apiKey=" + APIKey;

    fetch(queryURL)
    .then(function(response) {
        if(response.ok) {
            console.log("response", response);
            response.json().then(function(data) {
                console.log("data", data);

                //setting loop to give back the top 10 attractions
                for(let i=0; i<data.results.items.length; i++){
                    console.log("Title: ", data.results.items[i].title);
                    console.log("address: ", data.results.items[i].vicinity);
                    console.log("website: ", data.results.items[i].href);
                    console.log("icon: ", data.results.items[i].icon);
                    console.log("type: git ", data.results.items[i].category.title);
        

                }
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};

//getCity(selectValue.value);

//event listeners
selectValue.addEventListener("change", buttonClickHandler);
