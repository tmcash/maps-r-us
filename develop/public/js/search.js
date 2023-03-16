const activtyBtn = (event) => { 
  const {title, categoryTitle, vicinity} = event.target.dataset;
  let activityName = title;
  let activityType = categoryTitle;
  let activityAddress = vicinity;

  // send the data to the server using a POST request
  fetch("/api/activity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: activityName,
      type: activityType,
      address: activityAddress
    })
  })
    .then((response) => {
      console.log("Activity saved to server!");
    })
    .catch((error) => {
      console.error("Error saving activity:", error);
    });
};

