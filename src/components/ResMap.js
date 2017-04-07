import React from 'react'
import '../assets/styles/ResMap.css'

class reservationForm extends React.Component {
  
  render() {
    return (
      <div className="mainFormDiv">
        <div className="container">
          <h1>Reservation Form</h1>
         	<form>
  	       	<div className="formInput">	
  	       		<label for="name">Full Name</label>
  						<input id="name" type="text" />
  					</div>
  					<div className="formInput">
  						<label for="guests">Number of Guests</label>
  						<input id="guests" type="number" />
  					</div>
  					<div className="formInput">
  						<label for="date">Date</label>
  						<input id="date" type="text" />
  					</div>
  					<div className="formInput">
  						<label for="note">Special Note</label>
  						<textarea id="note" type="" />
  					</div>
  					<div className="formInput">
  						<label for="seating">Seating Preferance</label>
  						<select id="seating">
                <option value="Booth">Booth</option>
                <option value="Table">Table</option>
                <option value="Bar">Bar</option>
                <option value="Outside">Outside</option>
              </select>
  					</div>
  						<button type="submit">Reserve Table</button>
          </form>
          <div className="location">
            <p>
            Lorem ipsum dolor sit amet, ut vim consul principes, at vis laoreet accumsan delicata. Has eu purto dolorem oporteat. Sea animal omittam ne, iuvaret disputationi interpretaris ex eos.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3356353987942!2d-115.15469028456775!3d36.158386380085744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c39ab25d5fd5%3A0x8a76a578cf778310!2s1112+S+Casino+Center+Blvd%2C+Las+Vegas%2C+NV+89104!5e0!3m2!1sen!2sus!4v1491507970892" width="450" height="350">
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}
export default reservationForm