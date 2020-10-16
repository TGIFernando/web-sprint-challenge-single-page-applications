import React from "react";
import {Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
};
export default App;
