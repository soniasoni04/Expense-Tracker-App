import { GET_EXPENSE, GET_FULL_EXPENSE_DETAILS,GET_SELECTED_EXPENSE_DETAILS } from '../components/actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        
        case GET_EXPENSE:
            console.log('GET_EXPENSE details of user / action.payload : ', action.payload)
            return action.payload
        
        case GET_FULL_EXPENSE_DETAILS:
                console.log('GET_FULL_EXPENSE_DETAILS details of user / action.payload : ', action.payload)
                return action.payload
        case GET_SELECTED_EXPENSE_DETAILS:
            console.log('GET_SELECTED_EXPENSE_DETAILS details of user / action.payload : ', action.payload)
            return action.payload
        default:
            return state
    }
}
