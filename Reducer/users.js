import { GET_USERS } from '../components/actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        case GET_USERS:
            console.log('GET_USERS details of user - action.payload : ', action.payload)
            return action.payload
        default:
            return state
    }
}
