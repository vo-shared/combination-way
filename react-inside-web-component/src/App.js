import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {MenuApp} from "./menu-app/MenuApp";

function App() {


  return (
        <MenuApp activeMenuItem="bar" onItemChanged={(e)=> {console.log(e)}} />
  );
}

export default App;
