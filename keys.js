console.log("this is loaded");
exports.firebase = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket:process.env.storagebucket,
    messagingSenderId:process.env.messagingSenderId,
  };