var config = {
  apiKey: "AIzaSyDU-Ve4ffAdpzGw3tLOvIVLGNRimKKwuPU",
  authDomain: "aroo-8ee3a.firebaseapp.com",
  databaseURL: "https://aroo-8ee3a.firebaseio.com",
  projectId: "aroo-8ee3a",
  storageBucket: "aroo-8ee3a.appspot.com",
  messagingSenderId: "360578690037"
};
firebase.initializeApp(config);

var trains = "";
var destinations = "";
var minutes = 0;
var frequencys = 0;
console.log(trains)

$("#addTrain").on("click",function(){
  event.preventDefault();
  
  trains = $("#train1").val().trim();
  destinations = $("#destination1").val().trim();
  minutes = $("#time1").val().trim();
  frequencys = $("#frequency1").val().trim();
  console.log(trains);console.log(destinations);
  firebase.database().ref().push({
    trains:trains,
    destinations:destinations,
    minutes:minutes,
    frequencys:frequencys,
    dateadded:firebase.database.Servervalue.TIMESTAMP
  });
  console.log(trains);console.log(destinations);
});

// for Antonio to test if data has been sent under MINUTES in the database
// I have preprogrammed 15 minutes into the database under "minutes"
// push should be changing it
firebase.database().ref().on("value",function(snap){
  $('#minutes').html(snap.val().minutes);
});