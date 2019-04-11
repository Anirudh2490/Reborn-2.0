import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBaAHdOb_CThmGUGHmhlPMMG_vDeD5VrHw",
    authDomain: "reborn-zero-waste-movement.firebaseapp.com",
    databaseURL: "https://reborn-zero-waste-movement.firebaseio.com",
    projectId: "reborn-zero-waste-movement",
    storageBucket: "reborn-zero-waste-movement.appspot.com",
    messagingSenderId: "651519575673"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;