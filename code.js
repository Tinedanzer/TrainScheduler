var config = {
    apiKey: "AIzaSyDU-Ve4ffAdpzGw3tLOvIVLGNRimKKwuPU",
    authDomain: "aroo-8ee3a.firebaseapp.com",
    databaseURL: "https://aroo-8ee3a.firebaseio.com",
    projectId: "aroo-8ee3a",
    storageBucket: "aroo-8ee3a.appspot.com",
    messagingSenderId: "360578690037",
  };
firebase.initializeApp(config);
var trains = "";
var destinations = "";
var minutes2 = 0;
var frequencys = 0;
console.log(trains)

$("#addTrain").on("click",function(){
  
  trains = $("#train1").val().trim();
  destinations = $("#destination1").val().trim();
  minutes2 = $("#time1").val().trim();
  frequencys = $("#frequency1").val().trim();
  console.log(trains);console.log(destinations);
  firebase.database().ref().set({
    trains:trains,
    destinations:destinations,
    minutes2:minutes2,
    frequencys:frequencys

  });
  console.log(trains);console.log(destinations);
});
// from firebase append data for each slot on the html
// target form data, have it store it in firebase, have the timers run in real time; video 1
firebase.database().ref().on("value",function(snap){
  $('#minutes').html(snap.val().minutes);
});