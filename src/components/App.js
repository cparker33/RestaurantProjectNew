
import React, { Component } from 'react';
import store from '../store'
import { getData } from '../api/bcbc'
import '../assets/styles/App.css';

import AboutUs from './AboutUs'
import OurFood from './OurFood'


getData()

// Open Sans Font
// Papyrus for Headers

class App extends Component {

  render() {

    return (


      <div className="App">

      <div id='AppHeader'>
        <h1>Brown Chicken Brown Cow</h1>
      </div>

        <div className='Main'>

          
         
        
          <OurFood />
          
         
        
        </div>

      </div>
    );
  }
}

export default App;

