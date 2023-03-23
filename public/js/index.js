const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";

const resultGridAll = document.getElementById("result-grid-all");
const btnActivity = document.getElementById("btn-activity");
const buttonsEl = document.querySelector("search-section");
const sendEmailBtn = document.querySelector(".send-email-btn");

let selectValue = document.querySelector("#city");
let city = "";
let cityId = "";



cityLookUp = {
    "Charleston": { latLong: "32.7876,-79.9402", id: 1 },
    "Santa Fe": { latLong: "35.6876,-105.9384", id: 2 },
    "Savannah": { latLong: "32.0564,-81.0951", id: 3 },
    "New Orleans": { latLong: "29.9759,-90.0782", id: 4 },
    "NYC": { latLong: "40.7127,-74.0060", id: 5 },
    "San Antonio": { latLong: "29.4246,-98.4951", id: 6 },
    "Chicago": { latLong: "41.8755,-87.6244", id: 7 },
    "Portland": { latLong: "45.5202,-122.6741", id: 8 },
    "Williamsburg": { latLong: "37.2708,-76.7074", id: 9 },
    "Honolulu": { latLong: "21.3045,-157.8556", id: 10 }
}

let selectList = selectValue;

for (let key in cityLookUp) {
    let option = document.createElement("option");
    // option.value = cityLookUp[key].latLong;
    option.value = key;
    option.text = key;
    option.dataset.id = cityLookUp[key].id;
    selectList.appendChild(option); // add option to selectList
}


let buttonSelectHandler = function(event) {

    city = event.target.value;


    // clear the result grids before populating with new data
    resultGridAll.innerHTML = '';

}


//assiging a lat/long to each city so it can be used in the api query
let buttonClickHandler = function (event) {
    var clickedButton = event.target.getAttribute("id");
    console.log("cityLookUp: ", cityLookUp);
    console.log(city);
    cityId = cityLookUp[city].id;
    cityLatLong = cityLookUp[city].latLong;
    console.log(clickedButton);
    console.log("city ID: ", cityId)

  if (clickedButton === "btn-activity") {
        resultGridAll.innerHTML = '';
        getActivity(city, cityLatLong, cityId);
    } 
};


let getActivity = async function(city, cityLatLong, cityId) {


  let queryURL =
    "https://places.ls.hereapi.com/places/v1/discover/explore?&at=" +
    cityLatLong +
    "&cat=sights-museums&apiKey=" +
    APIKey;

  // define a function to handle the click event
  function handleAddToActivityListClick(event, data) {
    if (event.target.classList.contains("activity-btn")) {
      let index = Array.prototype.indexOf.call(
        event.target.parentElement.parentElement.children,
        event.target.parentElement
      );
      let eventTargetId = event.target.id;
      // get the activity data and save it to the database
      let activity = {
        name: data.results.items[eventTargetId].title,
        type: data.results.items[eventTargetId].category.title,
        address: data.results.items[eventTargetId].vicinity,
        city_id: cityId,
        city: city
    };


      console.log("index", index);
      console.log("Sending activity data:", JSON.stringify(activity));
      // post the activity data to the server
      fetch("/api/activity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }

  // remove the event listener before adding it again
  resultGridAll.removeEventListener("click", handleAddToActivityListClick);

  // add the event listener to the result grid
  let response = await fetch(queryURL);
  let data = await response.json();

  resultGridAll.addEventListener("click", event =>
    handleAddToActivityListClick(event, data)
  );

  // clear the result grids before populating with new data
  resultGridAll.innerHTML = "";

  //setting loop to give back the top 10 attractions
  for (let i = 0; i < 10; i++) {
    console.log("Title: ", data.results.items[i].title);

    //adding details from API as text to HTML
    let activityInfo = `
            <div class="activity-info">
                <img class="activity-icon" src="${
                  data.results.items[i].icon
                }" alt="activity-icon"></img>
                <ul class="activity-misc-info"> 
                    <li class="title"><b>Name:</b> ${
                      data.results.items[i].title
                    }</li>
                    <li class="type"><b>Type:</b> ${
                      data.results.items[i].category.title
                    }</li>
                    <li class="address"><b>Address:</b> ${
                      data.results.items[i].vicinity
                    }</li>
                    <button class="btn activity-btn bg-teal-800 hover:bg-teal-400 hover:font-bold text-white text-lg" id=${i}>Add to Activity List</button>
                </ul>
            </div>
          `;
    // add the activityInfo to the HTML
    resultGridAll.innerHTML += activityInfo;
  }
};

  
//creating event listener for the email button to send an email
$(document).on('click', '.send-email-btn', function(event) {
  event.preventDefault();
  const email = $('#email').val(); // get the email input value
  const data = {
      city: $(this).siblings('input[name=city]').val(),
      name: $(this).siblings('input[name=name]').val(),
      type: $(this).siblings('input[name=type]').val(),
      address: $(this).siblings('input[name=address]').val(),
      email: email // add email to the data object
  };
  $.ajax({
      url: '/email/send-email',
      type: 'POST',
      data: data,
      success: function(result) {
        console.log(result);
        window.open('/email/success', '_blank');
        alert('Email sent successfully!');

      },
      error: function(err) {
          console.log(err);
          alert('Error sending email!');
      }
  });
  return false;
});

//event listeners
selectValue.addEventListener("change", buttonSelectHandler);
btnActivity.addEventListener("click", buttonClickHandler);
