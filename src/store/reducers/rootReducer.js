//import authReducer from './authreducer'
// import coordReducer from './coordReducer'
// import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    // coordinates: coordReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer