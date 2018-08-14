import axios from 'axios'

export const getTokenByCode = (props) => {
    let url = new URL(window.location.href);
    let code = url.searchParams.get("code");
    let state = url.searchParams.get("state");
      axios.post('http://localhost:8080/getToken', { code,state })
      .then(function (response) {
        props.dispatch({type: "UPDATE_TOKEN" , payload : { token: response.data }})
        props.history.push('/search')
      })
      .catch(function (error) {
        console.log(error);
      });
}