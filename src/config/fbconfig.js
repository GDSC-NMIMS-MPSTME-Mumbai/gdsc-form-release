import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import config from './fbConfigDeets'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

export default firebase