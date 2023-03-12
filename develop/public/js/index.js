const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";
const charlestonEl = document.querySelector("#charleston");
const santafeEl = document.querySelector("#santafe");
const savannahEl = document.querySelector("#savannah");
const neworleansEl = document.querySelector("#neworleans");
const nycEl = document.querySelector("#nyc");
const sanantonioEl = document.querySelector("#sanantonio");
const chicagoEl = document.querySelector("#chicago");
const portlandEl = document.querySelector("#portland");
const williamsburgEl = document.querySelector("#williamsburg");
const honoluluEl = document.querySelector("#honolulu");
const buttonsEl = document.querySelector(".btn-city");

//assiging a lat/long to each city so it can be used in the api query
let buttonClickHandler = function(event) {
    let city = "";
    let clickedButton = event.target.getAttribute("id");
    console.log(event.target);

    switch (clickedButton) {
        case "charleston":
            city = "32.7876,-79.9402";
            break;
        case "santafe":
            city = "35.6876,-105.9384";
            console.log(city);
            break;
        case "savannah":
            city = "32.0564,-81.0951";
            break;
        case "neworleans":
            city = "29.9759,-90.0782";
            break;
        case "nyc":
            city = "40.7127,-74.0060";
            break;
        case "sanantonio":
            city = "29.4246,-98.4951";
            break;
        case "chicago":
            city = "41.8755,-87.6244";
            break;
        case "portland":
            city = "45.5202,-122.6741";
            break;
        case "williamsburg":
            city = "37.2708,-76.7074";
            break;
        case "honolulu":
            city = "21.3045,-157.8556";
            break;
        default:
            console.log("Invalid city");
            break;
    }

    getCity(city);
}




// let buttonClickHandler = function(event) {
//     let city = "";
//     let clickedButton = event.target.getAttribute("id");
//         console.log(event.target)
//     if (clickedButton === "charleston"){
//         city = "32.7876,-79.9402";
//     } else if (clickedButton === "santafe"){
//         city = "35.6876,-105.9384";
//         console.log(city);
//     }  else if (clickedButton === "savannah"){
//         city = "32.0564,-81.0951";
//     }  else if (clickedButton === "neworleans"){
//         city = "29.9759,-90.0782";
//     }  else if (clickedButton === "nyc"){
//         city = "40.7127,-74.0060";
//     }  else if (clickedButton === "sanantonio"){
//         city = "29.4246,-98.4951";
//     }  else if (clickedButton === "chicago"){
//         city = "41.8755,-87.6244";
//     }  else if (clickedButton === "portland"){
//         city = "45.5202,-122.6741";
//     }  else if (clickedButton === "williamsburg"){
//         city = "37.2708,-76.7074";
//     }  else if (clickedButton === "honolulu"){
//         city = "21.3045,-157.8556";
//     } 
//     getCity(city);
// }

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


//event listeners
buttonsEl.addEventListener("click", buttonClickHandler);