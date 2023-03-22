// const activtyBtn = (event) => { 
//   const {title, categoryTitle, vicinity, to_do} = event.target.dataset;
//   let activityName = title;
//   let activityType = categoryTitle;
//   let activityAddress = vicinity;


//   // send the data to the server using a POST request
//   fetch("/api/activity", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: activityName,
//       type: activityType,
//       address: activityAddress,
//       to_do: true,
//     })
//   })
//     .then((response) => {
//       console.log("Activity saved to server!");
//     })
//     .catch((error) => {
//       console.error("Error saving activity:", error);
//     });
// };

// const activityBtn = (event) => { 
//     const {title, categoryTitle, vicinity} = event.target.dataset;
//     let activityName = title;
//     let activityType = categoryTitle;
//     let activityAddress = vicinity;
//     let to_do = true;
    
//     // get the activity id from the HTML element's data attribute
//     let activityId = event.target.dataset.activityId;
    
//     // send the data to the server using a POST request
//     fetch(`/api/activity/${activityId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: activityName,
//         type: activityType,
//         address: activityAddress,
//         to_do: true,
//       })
//     })
//       .then((response) => {
//         console.log("Activity saved to server!");
//         // change the to_do value of the clicked activity to true
//         event.target.dataset.toDo = true;
//       })
//       .catch((error) => {
//         console.error("Error saving activity:", error);
//       });
//   };
  