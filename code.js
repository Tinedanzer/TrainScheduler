$(document).ready(function () {
  // Makes a connection to firebase.
  var config = {
    apiKey: "AIzaSyDU-Ve4ffAdpzGw3tLOvIVLGNRimKKwuPU",
    authDomain: "aroo-8ee3a.firebaseapp.com",
    databaseURL: "https://aroo-8ee3a.firebaseio.com",
    projectId: "aroo-8ee3a",
    storageBucket: "aroo-8ee3a.appspot.com",
    messagingSenderId: "360578690037"
  };
  firebase.initializeApp(config);
  // establishing variables that will be filled from form data
  // must use Let or Var here and not const because the data changes.
  let trains = "";
  let destinations = "";
  let minutes = 0;
  let frequencys = 0;
  // When the submit button is clicked, variables are defined from the values submitted,
  // then the values are stored in the firebase server.
  // Aroo2.reset , clears the form without refreshing the page.
  $("#addTrain").on("click", function () {
    event.preventDefault();

    trains = $("#train1").val().trim();
    destinations = $("#destination1").val().trim();
    minutes = $("#time1").val().trim();
    frequencys = $("#frequency1").val().trim();

    firebase.database().ref().push({
      trains: trains,
      destinations: destinations,
      minutes: minutes,
      frequencys: frequencys,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("#Aroo2")[0].reset();
    // return false;
    console.log(trains);
    console.log(destinations);
  });
  // created a button to hide all Trains
  const deleteButton = $('<button/>');
  // $('#everything2').append(deleteButton);
  deleteButton.text('Hide All Trains')
  $('#everything2').on("click", function () {
    $("#everything").empty();
  });

// --------------------------------------------
  // when a new train is added to Firebase, this appends the data into a new row
  firebase.database().ref().on("child_added", function (snap) {
    const away2 = snap.val().minutes;
    const frequency2 = snap.val().frequencys;
    // moment js variables
    // using moment.js I retrieved time in military time,
    // I then used the frequency to find the minutes away, as well as the
    // next time of Arrival; I then converted the time into am/pm and standard time.
 const minutesConverted= moment(away2,"HH:mm").subtract(1,"years");
 console.log("minutes converted: " + minutesConverted);
 const currentTime= moment();
 console.log("current time: " + currentTime);
 const diffTime= currentTime.diff(moment(minutesConverted), "minutes");
 console.log("difference in time: " + diffTime);
 const timeRemainder = diffTime % frequency2;
 console.log(timeRemainder);
const timeFinalMinutes= frequency2 - timeRemainder;
console.log("train is : " +timeFinalMinutes +"minutes away");

const arrival2=moment().add(timeFinalMinutes,"minutes").format("hh:mm a");
console.log(arrival2);
// appending of children from database onto html document
    $('#train').append("<tr><td>" + snap.val().trains + "</td></tr>");
    $('#destination').append("<tr><td>" + snap.val().destinations + "</td></tr>");
    $('#frequency').append("<tr><td>" + snap.val().frequencys + "</td></tr>");
    $('#arrival').append("<tr><td>" + arrival2 + "</td></tr>");
    $('#away').append("<tr><td>"+timeFinalMinutes+"</td></tr>")
    $('#everything2').append(deleteButton);
  })

  
});
// this code isnt needed, but will keep for future reference.
// .on("value",function(snap){}) ............listens
// firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added",function(snap){  
//   $('#train').html(snap.val().trains);
//   $('#destination').html(snap.val().destinations);
//   $('#frequency').html(snap.val().frequencys);
//   $('#minutes').html(snap.val().minutes);
// });
// firebase.database().ref().on("value",function(snap){  
//   console.log(snap.val());
//     $('#train').html(snap.val().trains);
//     $('#destination').html(snap.val().destinations);
//     $('#frequency').html(snap.val().frequencys);
//     $('#minutes').html(snap.val().minutes);
//   });