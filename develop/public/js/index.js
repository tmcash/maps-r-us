const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";

// const buttonsEl = document.querySelector(".btn-city");
let selectValue = document.querySelector("#city");

//code for date picker
const startDateInput = document.getElementById("start-date-input");
const endDateInput = document.getElementById("end-date-input");
const startDate = startDateInput.value;
const endDate = endDateInput.value;

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

//sets up the drop down menu on the html page for the cities
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
    getFood(city);
    getHotel(city);
}

let getCity = function(city) {
    let queryURL ="https://places.ls.hereapi.com/places/v1/discover/explore?&at=" + city + "&cat=sights-museums&apiKey=" + APIKey;

    fetch(queryURL)
    .then(function(response) {
        if(response.ok) {
            console.log("Activity response", response);
            response.json().then(function(data) {
                console.log("Activity data", data);

                //setting loop to give back the top 10 attractions
                for(let i=0; i<10; i++){
                    console.log("Title: ", data.results.items[i].title);
                    console.log("address: ", data.results.items[i].vicinity);
                    console.log("website: ", data.results.items[i].href);
                    console.log("icon: ", data.results.items[i].icon);
                    console.log("type: ", data.results.items[i].category.title);
                }
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};


//Function to get restaurant locations in selected city
let getFood = function(city) {
    let queryURL ="https://places.ls.hereapi.com/places/v1/discover/explore?at=" + city + "&cat=restaurant&apiKey=" + APIKey;

    fetch(queryURL)
    .then(function(response) {
        if(response.ok) {
            console.log("Food response", response);
            response.json().then(function(data) {
                console.log("Food data", data);

                //setting loop to give back the top 10 places to eat
                for(let i=0; i<10; i++){
                    console.log("Restaurant Title: ", data.results.items[i].title);
                    console.log("Restaurant address: ", data.results.items[i].vicinity);
                    console.log("Restaurant type: ", data.results.items[i].category.title);
                    console.log("Restaurant hours: ", data.results.items[i].openingHours.text);
                    console.log("icon: ", data.results.items[i].icon);
                }
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};

//function to find the hotels in the selected city
let getHotel = function(city) {
    let queryURL ="https://places.ls.hereapi.com/places/v1/discover/explore?at=" + city + "&cat=accommodation&apiKey=" + APIKey;

    fetch(queryURL)
    .then(function(response) {
        if(response.ok) {
            console.log("Hotel response", response);
            response.json().then(function(data) {
                console.log("Hotel data", data);

                //setting loop to give back the top 10 accomodations
                for(let i=0; i<10; i++){
                    console.log("Hotel Title: ", data.results.items[i].title);
                    console.log("Hotel address: ", data.results.items[i].vicinity);
                    console.log("Hotel type: ", data.results.items[i].category.title);
                    console.log("Hotel hours: ", data.results.items[i].openingHours.text);
                    console.log("icon: ", data.results.items[i].icon);
                }
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};


//event listeners
selectValue.addEventListener("change", buttonClickHandler);
