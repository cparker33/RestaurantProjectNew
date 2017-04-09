import React, { Component } from 'react';
import '../assets/styles/Header.css';

class Header extends Component {
	render() {
		return (
		<div className="App">
			<div id='AppHeader'>
		        <h1>Brown Chicken Brown Cow</h1>
		    
		        <img id="chicken" alt="a" src="http://www.freeiconspng.com/uploads/chicken-icon-31.png"/>
		        <img id="cow" alt="b" src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/cow.png"/>
		    <div className="media">
		        <img id="links" alt='' src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-256.png"/>
		        <img id="links" alt='' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXJ1fO-imbwdOgMgYAIKAIVakQZ-NCK-e4w6imx55zvmW39JpR"/>
		        <img id="links" alt='' src="http://files.softicons.com/download/android-icons/maximal-circle-icons-by-fritz-franke/png/128x128/instagram.png"/>
		        <img id="links" alt='' src="http://static.wixstatic.com/media/79efce_fb61389b60d141e28a3f3259a5143e08~mv2.png"/>
		    </div> 
		    </div>
		</div>

		);
	}
}
export default Header;
