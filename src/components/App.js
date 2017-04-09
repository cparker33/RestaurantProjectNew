
import React, { Component } from 'react';
// import store from '../store'
// import { getData } from '../api/bcbc'
import '../assets/styles/App.css';
import AboutUs from './AboutUs'
import OurFood from './OurFood'
import Menu from './Menu'
import reservationForm from './ResMap'


// getData()

// Open Sans Font
// Papyrus for Headers

class App extends Component {

  render() {

    return (


      <div className="App">

        <div className='Main'>
          <reservationForm />
          <Menu />
          <AboutUs />
          <OurFood />
        
        
        </div>

      </div>
    )
  }
}

export default App;

