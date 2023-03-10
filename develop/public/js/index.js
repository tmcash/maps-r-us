const APIKey = "5P33fDg7Tt7vuEz6sL29Bd9KETzuqvLDV8oaUS5NIIM";
const geoAPIKey = "311efa0f80774863873d1f5db76afb00";
const city = "leipzig"

let getCity = function() {
    let queryURL ="https://places.ls.hereapi.com/places/v1/discover/explore?&at=37.7942,-122.4070&cat=sights-museums&apiKey=" + APIKey;

    fetch(queryURL)
    .then(function(response) {
        if(response.ok) {
            console.log("response", response);
            response.json().then(function(data) {
                console.log("data", data);
                // Displays current date

            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};

getCity();