const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";
const resultGridHotel = document.getElementById("result-grid-hotel");
const resultGridFood = document.getElementById("result-grid-food");
const resultGridActivity = document.getElementById("result-grid-activity");
const btnHotel = document.getElementById("btn-hotel");
const btnFood = document.getElementById("btn-food");
const btnActivity = document.getElementById("btn-activity");
const buttonsEl = document.querySelector("search-section");


// const buttonsEl = document.querySelector(".btn-city");
let selectValue = document.querySelector("#city");
let city = "";

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
let buttonSelectHandler = function(event) {

    city = event.target.value;

    // clear the result grids before populating with new data
    resultGridHotel.innerHTML = '';
    resultGridFood.innerHTML = '';
    resultGridActivity.innerHTML = '';
    // getCity(city);
    // getFood(city);
    // getHotel(city);
}


//adding new code here so if it blows up delete this part
let buttonClickHandler = function (event) {
    var clickedButton = event.target.getAttribute("id");
    console.log(clickedButton);
    console.log(city);
    if (clickedButton === "btn-hotel") {
        resultGridHotel.innerHTML = '';
        getHotel(city);
    } else if (clickedButton === "btn-food") {
        resultGridFood.innerHTML = '';
        getFood(city);
    } else if (clickedButton === "btn-activity") {
        resultGridActivity.innerHTML = '';
        getActivity(city);
    } 
};



let getActivity = function(city) {
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
                
				//adding details from API as text to HTML
                let activityInfo = `
                <div class = "activity-info">
                    <img class="activity-icon" src="${data.results.items[i].icon}" alt="activity-icon"></img>
                    <ul class = "activity-misc-info">
                        <li class = "title">Name: ${data.results.items[i].title}</li>
                        <li class = "type">Type: ${data.results.items[i].category.title}</li>
                        <li class = "address">Address: ${data.results.items[i].vicinity}</li>
                    </ul>
                </div>
            `;
            resultGridActivity.innerHTML += activityInfo;
        }
    });
} else {
    console.log('Error: ' + response.statusText);
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

				//adding details from API as text to HTML
                let foodInfo = `
                <div class = "food-info">
                    <img class="food-icon" src="${data.results.items[i].icon}" alt="food-icon"></img>
                    <ul class = "food-misc-info">
                        <li class = "title">Restaurant Name: ${data.results.items[i].title}</li>
                        <li class = "address">Address: ${data.results.items[i].vicinity}</li>
                        <li class = "hours">Hours: ${data.results.items[i].openingHours.text}</li>
                    </ul>
                </div>
            `;
            resultGridFood.innerHTML += foodInfo;
        }
    });
} else {
    console.log('Error: ' + response.statusText);
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

				    //adding details from API as text to HTML
                    let hotelInfo = `
                    <div class = "hotel-info">
                        <img class="hotel-icon" src="${data.results.items[i].icon}" alt="hotel-icon"></img>
                        <ul class = "hotel-misc-info">
                            <li class = "title">Hotel Name: ${data.results.items[i].title}</li>
                            <li class = "type">Type: ${data.results.items[i].category.title}</li>
                            <li class = "address">Address: ${data.results.items[i].vicinity}</li>
                        </ul>
                    </div>
                `;
                resultGridHotel.innerHTML += hotelInfo;
            }
        });
    } else {
        console.log('Error: ' + response.statusText);
    }
    });
    };

//event listeners
selectValue.addEventListener("change", buttonSelectHandler);
// buttonsEl.addEventListener("click", buttonClickHandler);
btnHotel.addEventListener("click", buttonClickHandler);
btnFood.addEventListener("click", buttonClickHandler);
btnActivity.addEventListener("click", buttonClickHandler);