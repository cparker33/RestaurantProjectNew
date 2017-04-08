import React, { Component } from 'react';
import store from '../store'
import { getData } from '../api/bcbc'
import '../assets/styles/Menu.css';


getData()

// https://unsplash.com/collections/312299/restaurant-cafe?photo=mcjvw2570iA
// https://unsplash.com/collections/312299/restaurant-cafe

class Menu extends Component {

  constructor() {

    super()
    
    this.state = {

      theClass: 'thatDiv',
      menuItems: [],
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

      // console.log('Mount ', appSt.cData[0])  

      this.setState({

        menuItems: appSt.cData[0],
        appItems: appSt.cData[0].appetizers,
        entItems: appSt.cData[0].entrees,
        sidItems: appSt.cData[0].sides

      })
    })
  }



  render() {

    console.log('Render Items ', this.state.menuItems)
    console.log('Render Apps ', this.state.appItems)

   


    
    return (

      <div id="MenuOpen">
      
          <div id='MenuBg'>
            <img id='MenuBgImg' alt=' ' src='https://unsplash.it/1024/1450?image=292' />
            <div id='MenuBgImgCvr'></div>
          </div>

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
    );
  }
}

export default Menu;
