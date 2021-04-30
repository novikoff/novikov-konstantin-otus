//const functions = require("firebase-functions");
//import * as functions from 'firebase-functions';
//import * as admin from 'firebase-admin';
//const admin = require("firebase-admin");
//import * as express from 'express';

const express = require("express");

const { firebase, admin } = require('./fbConfig')

// firebase.auth().signInWithEmailAndPassword("email@email.com", "123456")
//     .then(function () {
//         firebase.auth().currentUser.getIdToken(true).then(function (idToken){
//             console.log("idToken",idToken);
//             //res.send(idToken)
//             //res.end()
//         }).catch(function (error) {
//             //Handle error
//         });
//     }).catch(function (error) {
//     //Handle error
//     });



    //admin.auth().verifyIdToken("eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC1lZWY1NiIsImF1ZCI6ImF1dGgtZWVmNTYiLCJhdXRoX3RpbWUiOjE2MTc3OTM3MzUsInVzZXJfaWQiOiIzWDlnaThybFExV2o5Y0VUZUtVTTNIN2Q2Z1QyIiwic3ViIjoiM1g5Z2k4cmxRMVdqOWNFVGVLVU0zSDdkNmdUMiIsImlhdCI6MTYxNzc5MzczNSwiZXhwIjoxNjE3Nzk3MzM1LCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJlbWFpbEBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.aoF4Ov9k71z1W1nupdhBSVhCST5SpsECrLTc0TG0gysvl-YtSSQe5LR_IdGEsHxZqO3VWxS-E75EwkADYYBTpgLwuuBX6jSEG9Ej53Q20kiZmiED05M3VFfS2XvkybKwFWh7UAn0pzZTDrkz8kSNyxe6q9dgIgtTIlNmHt5cRdU-jMysD0878vVIJUF1HhkxRKKjjvu7u7AbqVbPfOVrmOVUzcQL0QPbLtcu4ag_Mr2JVDeYqWLyCkHHiZEf8SfomnXoviL5SXr7j2YaQvuKayYMsrIo3XH7hRYyP4n--MFql0YfJYBJiqMU3il6rfQxoBcPW7MACMNCxWJ8ml5wGQ")



//import * as bodyParser from "body-parser";


//initialize firebase inorder to access its services

//process.env.GCLOUD_PROJECT = JSON.parse(process.env.FIREBASE_CONFIG).projectId
//admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();

// const main = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//add the path to receive request and set json as bodyParser to process the body
// main.use('/api/v1', app);
// main.use(bodyParser.json());
// main.use(bodyParser.urlencoded({ extended: false }));



//initialize the database and the collection
// const db = admin.firestore();
// const userCollection = 'users';

//define google cloud function name
// export const webApi = functions.https.onRequest(main);

let user=null;

const FBAuth = (req, res, next) => {
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
        admin.auth().verifyIdToken(idToken)
            .then(function (decodedToken) {
                console.log(decodedToken);
                user=decodedToken;
                next()
            }).catch(function (error) {
            //console.log("FIREBASE",error);
            //Handle error
            next()
        });
    }else{
        console.log('No token found');
        return res.status(403).json({error: 'Unauthorization'})
    }
}

app.get('/authVerify', FBAuth, async (req, res) => {
    res.status(200).send({'ok':'ok'});
});



app.post('/authVerify', FBAuth ,async (req, res) => {
    //res.status(200).send({'verify':'ok'});
    if(user!==null && user.user_id!==null){
        res.status(200).send({'verify':'true'});
    }else{
        res.status(403).json({error: 'Unauthorization'})
    }
});

app.listen(3001,function () {
    console.log("APP LISTEN");
})
