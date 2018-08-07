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
// establishing variables that will be fill from form data
  var trains = "";
  var destinations = "";
  var minutes = 0;
  var frequencys = 0;

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
  
  console.log(trains);console.log(destinations);
});

firebase.database().ref().on("child_added", function(snap){
  
  $('#train').append("<tr><td>" + snap.val().trains + "</td></tr>");
  $('#destination').append("<tr><td>"+snap.val().destinations+"</td></tr>");
  $('#frequency').append("<tr><td>"+snap.val().frequencys+"</td></tr>");
  $('#minutes').append("<tr><td>"+snap.val().minutes+"</td></tr>");
})

});
// this code isnt needed, but will keep for future reference.

// firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added",function(snap){  
//   $('#train').html(snap.val().trains);
//   $('#destination').html(snap.val().destinations);
//   $('#frequency').html(snap.val().frequencys);
//   $('#minutes').html(snap.val().minutes);
// });