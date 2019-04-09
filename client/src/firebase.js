import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBaAHdOb_CThmGUGHmhlPMMG_vDeD5VrHw",
    authDomain: "reborn-zero-waste-movement.firebaseapp.com",
    databaseURL: "https://reborn-zero-waste-movement.firebaseio.com",
    projectId: "reborn-zero-waste-movement",
    storageBucket: "reborn-zero-waste-movement.appspot.com",
    messagingSenderId: "651519575673"
  };
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")