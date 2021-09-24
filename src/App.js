import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import firebase from 'firebase';

function App() {
  const [url, setUrl] = useState("")
  useEffect(() => {
    console.log("here")
    firebase.firestore().collection("forms").orderBy("createdOn", 'desc').limit(1).get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log("doc", doc.data())
        setUrl(doc.data()["link"])
      })
    }).catch(err => {
      console.log("erorr", err)
    })
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
      }
    }
  }, [])
  return (
    <div className="App" >
      <Login url={url} />
    </div>
  );
}

export default App;
