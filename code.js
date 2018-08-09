$(document).ready(function(){
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
  let trains = "";
  let destinations = "";
  let minutes = 0;
  let frequencys = 0;
// When the submit button is clicked, variables are defined from the values submitted,
// then the values are stored in the firebase server.
// Aroo2.reset , clears the form without refreshing the page.
$("#addTrain").on("click",function(){
  event.preventDefault();

  trains = $("#train1").val().trim();
  destinations = $("#destination1").val().trim();
  minutes = $("#time1").val().trim();
  frequencys = $("#frequency1").val().trim();

  firebase.database().ref().push({
    trains:trains,
    destinations:destinations,
    minutes:minutes,
    frequencys:frequencys,
    dateAdded:firebase.database.ServerValue.TIMESTAMP
  });
  $("#Aroo2")[0].reset();
  // return false;
  console.log(trains);console.log(destinations);
});
// created a button to hide all Trains
let deleteButton= $('<button/>');
// $('#everything2').append(deleteButton);
deleteButton.text('Hide All Trains')
$('#everything2').on("click",function(){
  $("#everything").empty();
});

// when a new train is added, this appends the data into a new row
firebase.database().ref().on("child_added", function(snap){
  let away2=snap.val().minutes;
  $('#train').append("<tr><td>" + snap.val().trains + "</td></tr>");
  $('#destination').append("<tr><td>"+snap.val().destinations+"</td></tr>");
  $('#frequency').append("<tr><td>"+snap.val().frequencys+"</td></tr>");
  $('#arrival').append("<tr><td>"+away2+"</td></tr>");
  // $('#away').append("<tr><td>"+away2+"</td></tr>")
  $('#everything2').append(deleteButton);
})

firebase.database().ref().on("value",function(snap){  
  console.log(snap.val());
    $('#train').html(snap.val().trains);
    $('#destination').html(snap.val().destinations);
    $('#frequency').html(snap.val().frequencys);
    $('#minutes').html(snap.val().minutes);
  });
});
// this code isnt needed, but will keep for future reference.

// firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added",function(snap){  
//   $('#train').html(snap.val().trains);
//   $('#destination').html(snap.val().destinations);
//   $('#frequency').html(snap.val().frequencys);
//   $('#minutes').html(snap.val().minutes);
// });