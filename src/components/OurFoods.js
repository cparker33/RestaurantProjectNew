import React, { Component } from 'react';
import data from './db.json'
import '../api/Styles/OurFood.css';

class OurFood extends Component {
  render () {
		return (
		<div id="PhotoGallery">
    		
    		{data.gallery.map(gallery=>(
    			<img className="steaks" alt="" src={gallery.url} />
    		))}

    	</div>
		);
	}
} 
  

export default OurFood;