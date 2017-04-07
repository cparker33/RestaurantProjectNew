
const InitState = {

  cData: {} 

}


export function cReduc (state = InitState, action) {
  
  switch (action.type) {

  case 'GET_DATA':

    return {

      cData: [...state.eData, action.action]

    }

  default:

    return state

  }

}

