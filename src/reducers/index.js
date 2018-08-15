
const initialState = {
    status : 'LOGIN',
    token : '',
    user : {},
}

export default function reducer(state = initialState , action){
    console.log(action)
    switch(action.type) {
      case "UPDATE_TOKEN" : 
        return {
          ...state,
          token : action.payload.token
      }
      case "UPDATE_STATUS" : 
        return {
          ...state,
          status : action.payload.status
      }
      case "UPDATE_USER" : 
        return {
          ...state,
          user : action.payload.user
      }
      case "LOGOUT" : 
        return initialState
        
      default : 
        return state;
    }
    
}