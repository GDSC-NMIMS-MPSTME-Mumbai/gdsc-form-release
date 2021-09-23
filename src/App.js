import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';

function App() {
  useEffect(() => {
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

    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
