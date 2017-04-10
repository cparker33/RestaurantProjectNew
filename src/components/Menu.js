import React, { Component } from 'react';
import store from '../store'
import { getData } from '../api/bcbc'
import { componentClick } from '../api/bcbc'
import '../assets/styles/Menu.css';


getData()

// componentClick('Menu')


class Menu extends Component {

  constructor() {

    super()
    
    this.state = {

      theClass: 'Closed',
      appItems: [],
      entItems: [],
      sidItems: [],
    }

  }

 
  getAller(c) {

    if (c === 0) {

      return ' '

    } else {

      return (<span className='MenuInfoIcon'><i className="fa fa-exclamation-triangle" aria-hidden="true"></i></span>)

    }

  }

  getFav(c) {

    if (c === 0) {

      return ' '

    } else {

      return (<span className='MenuInfoIcon'><i className="fa fa-heart" aria-hidden="true"></i></span>)

    }

  }

  getSpice(c) {

    if (c === 0) {

      return ' '

    } else {

      return (<span className='MenuInfoIcon'><i className="fa fa-fire" aria-hidden="true"></i></span>)

    }

  }

  getVeg(c) {

    if (c === 0) {

      return ' '

    } else {

      return (<span className='MenuInfoIcon'><i className="fa fa-leaf" aria-hidden="true"></i></span>)

    }

  }


  // <i class="fa fa-heart" aria-hidden="true"></i>
  // <i class="fa fa-fire" aria-hidden="true"></i>
  // <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
  // <i class="fa fa-leaf" aria-hidden="true"></i>

  componentWillMount() {

    store.subscribe(() => {

      const appSt = store.getState()

      console.log('Mount ', appSt.menuClass)  

      this.setState({

        
        appItems: appSt.cData[0].appetizers,
        entItems: appSt.cData[0].entrees,
        sidItems: appSt.cData[0].sides,
        theClass: appSt.menuClass,
       

      })
    })
  }

  handleClick() {

    componentClick('Menu')

  }


  render() {

    console.log('Render Class ', this.state.theClass)
   


    
    return (

    <div 
      onClick={this.handleClick}
      id={this.state.theClass === 'Closed' ? 'MenuOutterClosed' : 'MenuOutterOpen'}>
      
          <div id='MenuBg'>
            <img id='MenuBgImg' alt=' ' src='https://unsplash.it/1024/1450?image=292' />
            <div id='MenuBgImgCvr'></div>
          </div>

          <div
          id={this.state.theClass === 'Closed' ? 'MenuTitleClosed' : 'MenuTitleOpen'}>
          <h1
            id='MenuClosedText'>Menu</h1>
          </div>

    <div 
      id={this.state.theClass === 'Closed' ? 'MenuInnerClosed' : 'MenuInnerOpen'}>

          <div id='MenuCont'>

            <div id='MenuInnerCont'>

              <h1>Menu</h1>


              <div
                className='MenuSubSect'>
              <h2
                className='MenuSubTitle'>
                Appetizers
              </h2>

              {

                this.state.appItems.map((ap) => {

                  return (

                    <div>

                      <div 
                        className='MenuTitlePriceCont'>

                        <div
                          className='MenuTitle'>

                          <p>{ap.item}</p>

                        </div>

                        <div
                          className='MenuPrice'>

                          <p>{ap.price}</p>

                        </div>

                      </div>

                      <div
                        className='MenuDisc'>

                        <p>{ap.description}</p>

                      </div>

                      <div
                        className='MenuInfo'>
                        
                          {this.getSpice(ap.spicy)}
                          {this.getFav(ap.favorite)}
                          {this.getAller(ap.allergies)}
                          {this.getVeg(ap.vegan)}
                        
                      </div>

                    </div>

                  )

                })
              }
              </div>

              <div
                className='MenuSubSect'>

              <h2
                className='MenuSubTitle'>
                Entrees
              </h2>


              {
                this.state.entItems.map((ap) => {

                  return (

                    <div>

                      <div 
                        className='MenuTitlePriceCont'>

                        <div
                          className='MenuTitle'>

                          <p>{ap.item}</p>

                        </div>

                        <div
                          className='MenuPrice'>

                          <p>{ap.price}</p>

                        </div>

                      </div>

                      <div
                        className='MenuDisc'>

                        <p>{ap.description}</p>

                      </div>

                      <div
                        className='MenuInfo'>
                        
                          {this.getSpice(ap.spicy)}
                          {this.getFav(ap.favorite)}
                          {this.getAller(ap.allergies)}
                          {this.getVeg(ap.vegan)}
                        
                      </div>

                    </div>

                  )

                })


              }

              </div>

              <div
                className='MenuSubSect'>

              <h2
                className='MenuSubTitle'>
                Sides
              </h2>


              {
                this.state.sidItems.map((ap) => {

                  return (

                    <div>

                      <div 
                        className='MenuTitlePriceCont'>

                        <div
                          className='MenuTitle'>

                          <p>{ap.item}</p>

                        </div>

                        <div
                          className='MenuPrice'>

                          <p>{ap.price}</p>

                        </div>

                      </div>

                      <div
                        className='MenuDisc'>

                        <p>{ap.description}</p>

                      </div>

                      <div
                        className='MenuInfo'>
                        
                          {this.getSpice(ap.spicy)}
                          {this.getFav(ap.favorite)}
                          {this.getAller(ap.allergies)}
                          {this.getVeg(ap.vegan)}
                        
                      </div>

                    </div>

                  )

                })


              }
              </div>

            </div>

          </div>
  

  </div>

</div>
    );
  }
}

export default Menu;
