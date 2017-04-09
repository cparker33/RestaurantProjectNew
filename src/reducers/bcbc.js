
const InitState = {

  cData: [],
  menuClass: 'Closed',
  resmapClass: 'Closed', 
  aboutusClass: 'Closed', 
  dailySpecialClass: 'Open', 

}


export function cReduc (state = InitState, action) {
  
  // console.log('from reducer ', state, action)

  switch (action.type) {

  case 'GET_DATA':

    return {

      cData: [...state.cData, action.action],
      menuClass: state.menuClass,
      resmapClass: state.resmapClass,

    }

    break

    case 'COMPONENT_CLICK':

      if (action.action === 'Menu') {

        return {
          cData: state.cData,
          menuClass: 'Open',
          resmapClass: 'Closed',

        }

      } else if (action.action === 'ResMap') {

        return {
          cData: state.cData,
          menuClass: 'Closed',
          resmapClass: 'Open',

        }

      }
    

    

    break

    // COMPONENT_CLICK

  default:

    return state

  }

}


/*
,
  menuClassState: 'Closed', 
  aboutusClassState: 'Closed', 
  resmapClassState: 'Closed' 


break

  case 'COMPONENT_CLICK':


      if (action === 'menu') {

        return {

          menuClassState: 'Open', 
          aboutusClassState: 'Closed', 
          resmapClassState: 'Closed' 
        }
      
      }


*/

