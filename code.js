var config = {
    apiKey: "AIzaSyDU-Ve4ffAdpzGw3tLOvIVLGNRimKKwuPU",
    authDomain: "aroo-8ee3a.firebaseapp.com",
    databaseURL: "https://aroo-8ee3a.firebaseio.com",
    projectId: "aroo-8ee3a",
    storageBucket: "aroo-8ee3a.appspot.com",
    messagingSenderId: "360578690037",
  };
firebase.initializeApp(config);
var names="";
var destinations="";
var minutes= 0;
var frequencys= 0;

$("#addTrain").on("click",function(){
  names = $("#train1").val().trim();
  destinations = $("#destination1").val().trim();
  minutes = $("#time1").val().trim();
  frequencys = $("#frequency1").val().trim();

  firebase.database().ref().set({
    names:name.name1,
    destinations:destination.destination1,
    minutes:minute.minute1,
    frequencys:frequency.frequency1,

  })
});
// from firebase append data for each slot on the html
// target form data, have it store it in firebase, have the timers run in real time; video 1
firebase.database().ref().on("value",function(snap){
  $('#minutes').html(snap.val().minute.minute1);
});