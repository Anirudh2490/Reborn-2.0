import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaAHdOb_CThmGUGHmhlPMMG_vDeD5VrHw",
    authDomain: "reborn-zero-waste-movement.firebaseapp.com",
    databaseURL: "https://reborn-zero-waste-movement.firebaseio.com",
    projectId: "reborn-zero-waste-movement",
    storageBucket: "reborn-zero-waste-movement.appspot.com",
    messagingSenderId: "651519575673"
  };
  
class Firebase {
    
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
  
export default Firebase;
  