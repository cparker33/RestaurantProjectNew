import React, { Component } from 'react';
import '../assets/styles/AboutUs.css';

class AboutUs extends Component {
  render() {
    return (

      <div id="AboutUs">
      
          <img className="background" alt="x" src="https://static1.squarespace.com/static/5491eb4de4b0d067555899f5/t/549c42d9e4b045dc15455508/1419526880579/Kosher+_+Supper+_+Kitchensurfing-187.jpg?format=1500w"/>
          <img className="JD" alt="y" src="http://lostmuseum.cuny.edu/archive/assets/images/archive/jeffersongame.jpg" />
              <p className="Gunter">Günter Nadelman</p>
            <div id="paragraphs">
            	<p className="story">Our Story</p>
                <p className="aboutPage"><strong>Brown Chicken Brown Cow</strong> was founded in 1958 by Günter Nadelman, who, as a young aspiring chef, traveled the world in search for his culinary niche. After many years of culinary explorations, Günter returned home, ready to test the skills he learned and acquired. Out of trial and error, perseverance, and dedication, Brown Chicken Brown Cow was born. Today, the staff continues to emulate Günter's hard work and preserve his legacy by serving only the best quality meats.</p>

                <p className="aboutPage">Brown Chicken Brown Cow is known for their dishes such as the 24oz 3-wk Dry Aged Premium Gold Angus Cowboy Cut Rib Eye and ostrich Filet Mignon, just to name a few. We take aging of our steaks very seriously. Each cut is aged until it reaches optimal tenderness. Our steaks are seasoned with a special blend of spices, carefully perfected by Günter himself, and grilled on top of all-natural oak wood.</p>

                 <p className="aboutPage"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iure sed excepturi totam voluptate perspiciatis eveniet, nobis, expedita commodi, quibusdam, quia odio quam. Debitis laborum, quasi voluptate. Voluptate, quos veritatis!</div>
                 <div>Accusantium quae, perspiciatis laudantium at veniam nesciunt, est! Dolor adipisci expedita vitae quis consequatur suscipit neque exercitationem sit magni minima, molestias, fugit eos possimus, architecto. Tempore mollitia itaque, temporibus suscipit!</div>
                 <div>Cupiditate minus odio accusamus consequuntur perspiciatis esse modi suscipit excepturi quod eligendi mollitia harum iusto ab architecto, assumenda doloribus ducimus repudiandae consequatur nulla illo perferendis voluptatibus quisquam odit. Cupiditate, inventore.</div></p>

                 <p className="aboutPage">Stay connected and get updates about our specials! Follow us on: (blog link)</p>

          </div>
          
      </div>
    );
  }
}

export default AboutUs;