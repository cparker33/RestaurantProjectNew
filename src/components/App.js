
import React, { Component } from 'react';
import store from '../store'
import { getData } from '../api/bcbc'
import '../assets/styles/App.css';

import Menu from './Menu'
import AboutUs from './AboutUs'
import ResMap from './ResMap'
import Specials from './DailySpecials'
import OurFood from './OurFood'




import Header from './Header'



// getData()


getData()

// Open Sans Font
// Papyrus for Headers

class App extends Component {

  render() {

    return (


      <div className="App">

        <Header />

        <div className='Main'>
          
        
          
        
         <Menu /> 
         <ResMap />
         <Specials />
         <AboutUs />
         <OurFood />
         

         
         

         
        
        </div>

      </div>
    )
  }
}

export default App;

