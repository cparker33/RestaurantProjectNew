import React from 'react'
import '../assets/styles/DailySpecials.css'
import store from '../store'

class Specials extends React.Component {
  constructor() {
    super()
    this.state = {
      special: []
    }
  }


  componentWillMount() {
    store.subscribe(()=>{
      const appState = store.getState() 

      console.log('mount' , appState.dSpecial[0])

      this.setState({
        special: appState.dSpecial[0]
      })

    })
  }

  render() {

  console.log('render', this.state.special)    
    return (
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
    )
  }
}
export default Specials
