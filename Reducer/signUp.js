import { CREATE_SIGNUP } from '../components/actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        case CREATE_SIGNUP:
            console.log('CREATE_SIGNUP details of user / action.payload : ', action.payload)
            return action.payload
        default:
            return state
    }
}
