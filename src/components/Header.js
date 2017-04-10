import React, { Component } from 'react';
import '../assets/styles/Header.css';

class Header extends Component {
	render() {
		return (
		<div className="App">
			<div id='AppHeader'>
		        <h1>Brown Chicken Brown Cow</h1>
		    
		        <img id="chicken" alt="a" src="http://www.iconsdb.com/icons/preview/white/chicken-xxl.png"/>
		        <img id="cow" alt="b" src="http://flaticons.net/icons/Wildlife/Cow.png"/>
		    <div className="media">
		        <img id="links" alt='' src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-256.png"/>
		        <img id="links" alt='' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXJ1fO-imbwdOgMgYAIKAIVakQZ-NCK-e4w6imx55zvmW39JpR"/>
		        <img id="links" alt='' src="http://www.iconarchive.com/download/i62741/designbolts/free-instagram/Active-Instagram-3.ico"/>
		        <img id="links" alt='' src="http://static.wixstatic.com/media/79efce_fb61389b60d141e28a3f3259a5143e08~mv2.png"/>
		    </div> 
		    </div>
		</div>

		);
	}
}
export default Header;
