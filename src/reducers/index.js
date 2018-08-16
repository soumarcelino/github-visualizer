
const initialState = {
    status : 'LOGIN',
    token : '',
    searchStatus : {},
    search : {},
    searchLocation : {},
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
      case "UPDATE_USER" : 
        return {
          ...state,
          user : action.payload.user
      }

      case "SEARCH_USER" : 
        return {
          ...state,
          searchStatus : "LOADING"
      }
      
      
      case "SEARCH_NOT_FOUND" : 
        return {
          ...state,
          searchStatus : "NOT_FOUND"
      }
      case "UPDATE_SEARCH" : 
        return {
          ...state,
          search : action.payload.data
      }

      case "UPDATE_SEARCH_LOCATION" : 
        return {
          ...state,
          searchStatus : "complete",
          searchLocation : action.payload.location
      }

      case "LOGOUT" : 
        return initialState
        
      default : 
        return state;
    }
    
}