const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";

const resultGridAll = document.getElementById("result-grid-all");
const btnActivity = document.getElementById("btn-activity");
const buttonsEl = document.querySelector("search-section");

let selectValue = document.querySelector("#city");
let city = "";

//code for date picker
// const startDateInput = document.getElementById("start-date-input");
// const endDateInput = document.getElementById("end-date-input");
// const startDate = startDateInput.value;
// const endDate = endDateInput.value;

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
    resultGridAll.innerHTML = '';

}


//adding new code here so if it blows up delete this part
let buttonClickHandler = function (event) {
    var clickedButton = event.target.getAttribute("id");
    console.log(clickedButton);
    console.log(city);
 
   if (clickedButton === "btn-activity") {
        resultGridAll.innerHTML = '';
        getActivity(city);
    } 
};



let getActivity = function(city) {
    let queryURL = "https://places.ls.hereapi.com/places/v1/discover/explore?&at=" + city + "&cat=sights-museums&apiKey=" + APIKey;

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
                        <div class="activity-info">
                            <img class="activity-icon" src="${data.results.items[i].icon}" alt="activity-icon"></img>
                            <ul class="activity-misc-info">
                                <li class="title"><b>Name:</b> ${data.results.items[i].title}</li>
                                <li class="type"><b>Type:</b> ${data.results.items[i].category.title}</li>
                                <li class="address"><b>Address:</b> ${data.results.items[i].vicinity}</li>
                                <button class="activity-btn bg-teal-800 hover:bg-teal-400 hover:font-bold text-white text-lg">Add to Activity List</button>
                            </ul>
                        </div>
                    `;
                    // add the activityInfo to the HTML
                    resultGridAll.innerHTML += activityInfo;
                    
                    // add an event listener to the activity-btn element
                    let activityBtn = document.querySelectorAll(".activity-btn")[i];
                    activityBtn.addEventListener("click", function() {
                        // get the activity data and save it to the database
                        let activity = {
                            name: data.results.items[i].title,
                            type: data.results.items[i].category.title,
                            address: data.results.items[i].vicinity,
                            city: city,
                            todo: true
                        };
                        // post the activity data to the server
                        fetch("/activity", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(activity)
                        })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                    });
                }
            });
        } else {
            console.log('Error: ' + response.statusText);
        }
    });
};




//event listeners
selectValue.addEventListener("change", buttonSelectHandler);
btnActivity.addEventListener("click", buttonClickHandler);