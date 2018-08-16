import { getTokenByCode,searchUserAPI } from '../utils/index';

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'

export const authGetToken = (props) => {
    getTokenByCode(props)
}
export const searchUser = (query,token,dispatch) => {
    searchUserAPI(query,token,dispatch)
}