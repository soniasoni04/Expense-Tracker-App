import { GET_LOGIN } from '../components/actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        case GET_LOGIN:
            //console.log('GET_LOGIN details of user / action.payload : ', action.payload)
            return action.payload
        default:
            return state
    }
}
