import React, { Component } from 'react';
import data from '../assets/data.json'
import '../assets/styles/OurFood.css';
import store from '../store'
import { componentClick } from '../api/bcbc'

class OurFood extends Component {

  constructor() {

    super()
    
    this.state = {

      theClass: 'Closed',
     
    }

  }

  componentWillMount() {

    store.subscribe(() => {

      const appSt = store.getState()

      this.setState({

        theClass: appSt.foodClass,       

      })
    })
  }

  handleClick() {

    componentClick('Food')

  }
  render () {

		return (

<div
  onClick={this.handleClick} 
  id={this.state.theClass === 'Closed' ? 'FoodOutterClosed' : 'FoodOutterOpen'}>



<div
    id={this.state.theClass === 'Closed' ? 'FoodTitleClosed' : 'FoodTitleOpen'}>
  
    <h1
      id='FoodClosedText'>Our Food</h1>
  </div>


<div 
  id={this.state.theClass === 'Closed' ? 'FoodInnerClosed' : 'FoodInnerOpen'}>
 

		<div id="PhotoGallery">
        {data.gallery.map(gallery=>(          
    			<img className="steaks" alt="" src={gallery.url} />
        
            ))}
    	</div>
    </div>
  </div>
		);
	}
} 
export default OurFood;













