import store from '../store'
import axios from 'axios'

export function getData() {

  axios.get('https://json-data.herokuapp.com/restaurant/menu/1').then(function (data) {

  store.dispatch({

      type: 'GET_DATA',
      action: data.data 
      
    })

  })

}



export function componentClick(comp) {

  console.log('FROM API COMP CLICK')

  store.dispatch({

      type: 'COMPONENT_CLICK',
      action: comp
      
    })  


}
 




