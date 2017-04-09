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
 

//Action to pull Daily Specials API

export function getSpecial() {
	axios.get('https://json-data.herokuapp.com/restaurant/special/1').then(specialRes=>{
		axios.get('https://json-data.herokuapp.com/restaurant/menu/1').then(menuRes=>{

			var menuItem = menuRes.data.entrees.filter(entree=>{
				return entree.id === specialRes.data.menu_item_id
			})[0]

			console.log(menuItem)
			store.dispatch({
				type:'GET_SPECIAL',
				special: menuItem
			})
		})
	})
} 

