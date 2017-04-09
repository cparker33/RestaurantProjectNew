
const InitState = {

  cData: [],
  menuClass: 'Closed',
  resmapClass: 'Closed', 
  aboutusClass: 'Closed', 
  specialClass: 'Open', 
  foodClass: 'Closed', 

}


export function cReduc (state = InitState, action) {
  
  // console.log('from reducer ', state, action)

  switch (action.type) {

  case 'GET_DATA':

    return {

      cData: [...state.cData, action.action],
      menuClass: state.menuClass,
      resmapClass: state.resmapClass,
      specialClass: state.specialClass,
      aboutusClass: state.aboutusClass,
      foodClass: 'Open',
      

    }

    break

    case 'COMPONENT_CLICK':

      if (action.action === 'Menu') {

        return {
          cData: state.cData,
          menuClass: 'Open',
          resmapClass: 'Closed',
          specialClass: 'Closed',
          aboutusClass: 'Closed', 
          foodClass: 'Closed',

        }

      } else if (action.action === 'ResMap') {

        return {
          cData: state.cData,
          menuClass: 'Closed',
          resmapClass: 'Open',
          specialClass: 'Closed',
          aboutusClass: 'Closed',
          foodClass: 'Closed', 

        }

      } else if (action.action === 'Special') {

        return {
          cData: state.cData,
          menuClass: 'Closed',
          resmapClass: 'Closed',
          specialClass: 'Open',
          aboutusClass: 'Closed',
          foodClass: 'Closed', 

        }

      } else if (action.action === 'About') {

        return {
          cData: state.cData,
          menuClass: 'Closed',
          resmapClass: 'Closed',
          specialClass: 'Closed',
          aboutusClass: 'Open',
          foodClass: 'Closed', 

        }

      } else if (action.action === 'Food') {

        return {
          cData: state.cData,
          menuClass: 'Closed',
          resmapClass: 'Closed',
          specialClass: 'Closed',
          aboutusClass: 'Closed',
          foodClass: 'OPen', 

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

