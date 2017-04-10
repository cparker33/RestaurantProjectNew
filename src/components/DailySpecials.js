import React from 'react'
import '../assets/styles/DailySpecials.css'
import store from '../store'
import { componentClick } from '../api/bcbc'

class Specials extends React.Component {
  constructor() {
    super()
    this.state = {
      special: [],
      theClass: 'Open',
    }
  }


  componentWillMount() {
    store.subscribe(()=>{
      const appState = store.getState() 

      console.log('mount' , appState)

      this.setState({
        theClass: appState.specialClass, 
      })

    })
  }

  handleClick() {

    componentClick('Special')

  }
  

  render() {

  // console.log('render', this.state.special)    
    return (

<div
  onClick={this.handleClick} 
  id={this.state.theClass === 'Closed' ? 'DailyOutterClosed' : 'DailyOutterOpen'}>

<div id='cMenuCover'></div>

<div
    id={this.state.theClass === 'Closed' ? 'DailyTitleClosed' : 'DailyTitleOpen'}>
  
    <h1
      id='DailyClosedText'>Daily Special</h1>
  </div>


<div 
  id={this.state.theClass === 'Closed' ? 'DailyInnerClosed' : 'DailyInnerOpen'}>
 
        <div className="mainSpecialsDiv">
          <div className="dsContainer">
            <h1 className="dsH1">Daily Specials</h1>
            <div className="dsInfo">
              <h3>Today this thing's on special...</h3>
              <p>{this.state.special.item}</p>
              <p>{this.state.special.description}</p>
              <p>{'$' + this.state.special.price}</p>
              <img className="dsImage" src="http://static.wixstatic.com/media/d21006_0599debf31eb415ba24a8e6027cb9370.jpg_srz_696_584_85_22_0.50_1.20_0.00_jpg_srz"/>
            </div>
          </div>
        </div>

</div> 
</div> 
    )
  }
}
export default Specials
