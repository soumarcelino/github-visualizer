import axios from 'axios'

export const getTokenByCode = (props) => {
    let url = new URL(window.location.href);
    let code = url.searchParams.get("code");
    let state = url.searchParams.get("state");
      axios.post('http://201.49.15.60:555/getToken', { code,state })
      .then(function (response) {
        props.dispatch({type: "UPDATE_TOKEN" , payload : { token: response.data }})
        updateUser(response.data,props.dispatch)
        props.history.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateUser = (token,dispatch) => {
      axios.get(`https://api.github.com/user?${token}`)
      .then(function (response) {
          dispatch({type : "UPDATE_USER", payload : { user : response.data}})
	  searchUserAPI(response.data.login,token,dispatch)
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const searchUserAPI = (query,token,dispatch) => {
  dispatch({type: "INIT_SEARCH" , payload : { query }})
    axios.get(`https://api.github.com/users/${query}?${token}`)
      .then(function (response) {
        dispatch({type: "UPDATE_SEARCH" , payload : { data: response.data }})
        getGeoCode(response.data.location,dispatch)
      })
    .catch(function (error) {
      if (error.response.status === 404) {
        dispatch({type: "SEARCH_NOT_FOUND" , payload : { query }})
      }
    })

}

export const getGeoCode = ( location,dispatch ) => {
  axios.get(`http://maps.google.com/maps/api/geocode/json?address=${location}`)
    .then(function (response) {
      if(response.data.results[0]){
        console.log(response.data)
        dispatch({type: "UPDATE_SEARCH_LOCATION" , payload : { location: response.data.results[0].geometry.location }})
      }
      
    })
    .catch(function (error) {
        dispatch({type: "UPDATE_SEARCH_ERROR" , payload : { error }})
        console.log(error)
    })
}
