
import React, { Component } from 'react';
import store from '../store'
import { getData } from '../api/bcbc'
import '../assets/styles/App.css';
import Menu from './Menu'
import AboutUs from './AboutUs'
// import reservationForm from './ResMap'


// getData()

// Open Sans Font
// Papyrus for Headers

class App extends Component {

  render() {

    return (


      <div className="App">


        <div className='Main'>
          
         
         <AboutUs />
         
        
        </div>

      </div>
    )
  }
}

export default App;

