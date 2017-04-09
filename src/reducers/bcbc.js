
const InitState = {

  cData: {},
  dSpecial: {}
  
}


export function cReduc (state = InitState, action) {
  
  // console.log('from reducer ', state)

  switch (action.type) {

  case 'GET_DATA':

    return {

      cData: [...state.cData, action.action]

    },
  
  case 'GET_SPECIAL':

  	return {

      dSpecial: [...state.dSpecial, action.special]

  	}

  default:

    return state

  }

}

