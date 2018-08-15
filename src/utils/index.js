import axios from 'axios'

export const getTokenByCode = (props) => {
    let url = new URL(window.location.href);
    let code = url.searchParams.get("code");
    let state = url.searchParams.get("state");
      axios.post('http://localhost:8080/getToken', { code,state })
      .then(function (response) {
        props.dispatch({type: "UPDATE_TOKEN" , payload : { token: response.data }})
        updateUser(response.data,props.dispatch)
        props.history.push('/search')
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateUser = (token,dispatch) => {
      axios.get(`https://api.github.com/user?${token}`)
      .then(function (response) {
          dispatch({type : "UPDATE_USER", payload : { user : response.data}})
      })
      .catch(function (error) {
        console.log(error);
      });
}