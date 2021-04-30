require("firebase/auth");
const firebase = require('firebase')
const admin = require('firebase-admin')
var serviceAccount = require("./serviceAccountKey.json");
var firebaseConfig = {
    apiKey: "AIzaSyCVVNlE6Xkmb5pRjVFrIuZWy2MT14prgdM",
    authDomain: "auth-eef56.firebaseapp.com",
    projectId: "auth-eef56",
    storageBucket: "auth-eef56.appspot.com",
    messagingSenderId: "514131476845",
    appId: "1:514131476845:web:a00745762f97664356da64",
};

firebase.initializeApp(firebaseConfig);

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     credential: admin.credential.applicationDefault(),
//     databaseURL: "YOUR DATABASE URL"
//     databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
// });
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


module.exports = { firebase, admin };
