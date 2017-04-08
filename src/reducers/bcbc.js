
const InitState = {

  cData: {} 

}


export function cReduc (state = InitState, action) {
  
  // console.log('from reducer ', state)

  switch (action.type) {

  case 'GET_DATA':

    return {

      cData: [...state.cData, action.action]

    }

  default:

    return state

  }

}

