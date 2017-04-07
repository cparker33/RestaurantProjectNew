import store from '../store'
import axios from 'axios'

export function getData() {

axios.get('https://json-data.herokuapp.com/restaurant/menu/1').then(function (data) {

  console.log('from api ', data)
  console.log('from api.result ', data.data)

  store.dispatch({

      type: 'GET_DATA',
      action: data.data 
      
    })

  })

}
 





