import { combineReducers } from 'redux'
import signUp from './signUp'
import users from './users'
import login from './login'
import expense from './expense'

export default combineReducers({
signUp,
users,
login,
expense

})
