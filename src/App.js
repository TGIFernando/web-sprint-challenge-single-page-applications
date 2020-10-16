import React from "react";
import {Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Form from './components/form'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path ='/pizza'>
        <Form/>
      </Route>
    </div>
  );
};
export default App;
