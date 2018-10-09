import firebase, { FirebaseError } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_89ipAVS7W47nGjeI4ZGR4uu8dbwr_x4",
    authDomain: "jay-mariopan.firebaseapp.com",
    databaseURL: "https://jay-mariopan.firebaseio.com",
    projectId: "jay-mariopan",
    storageBucket: "jay-mariopan.appspot.com",
    messagingSenderId: "560174639684"
  };
firebase.initializeApp(config);  
firebase.firestore().settings({timestampsInSnapshots: true });

export default firebase;