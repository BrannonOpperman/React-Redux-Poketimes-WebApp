import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDSwnW1VhnnJkBeU8wifrHUSr53cTz3mOM",
    authDomain: "brannonopperman-poketimes.firebaseapp.com",
    databaseURL: "https://brannonopperman-poketimes.firebaseio.com",
    projectId: "brannonopperman-poketimes",
    storageBucket: "brannonopperman-poketimes.appspot.com",
    messagingSenderId: "888337809574",
    appId: "1:888337809574:web:189b5cd0240ccbe7137467",
    measurementId: "G-RVD3P69HE4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });
// const db = firebase.firestore();

export default firebase;