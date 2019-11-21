//create signup for users
export const CREATE_SIGNUP = 'CREATE_SIGNUP'

function getSignup(payload) {
  return {
    type: CREATE_SIGNUP,
    payload: payload
  }
}

export const signUp = (data) => (dispatch) => {

  //console.log('user data  details  : ', data)


  fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    }),
  })
    .then(res => res.json())
    .then(resJSON => {
      //console.log("response: ", resJSON)
      const action = getSignup(resJSON.message)
      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}

//fetch request to get details of users 

export const GET_USERS = 'GET_USERS'

function getUsers(payload) {
  return {
    type: GET_USERS,
    payload: payload
  }
}

export const users = () => (dispatch, getState) => {

  //console.log("u are inside the fetch request")

  const state = getState()
  // const { JWT } = state
  // console.log("state with JWT: ", JWT) // undefined

  fetch('http://localhost:4000/users')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log("user details with message : ",responseJson)
      //console.log("user details with message : ",responseJson.mesage)
      const action = getUsers(responseJson)   //include message??

      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}

//Login details of the user

export const GET_LOGIN = 'GET_LOGIN'

function getLogin(payload) {
  return {
    type: GET_LOGIN,
    payload: payload
  }
}

export const login = (data) => (dispatch, getState) => {

  //console.log("u are inside the login request")

  fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    }),
  })
    .then(res => res.json())
    .then(resJSON => {
      //console.log("response: JWT ", resJSON) // you will get JWT
      const action = getLogin(resJSON)
      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}

//expenseData post 
export const GET_EXPENSE = 'GET_EXPENSE'

function getExpense(payload) {
  return {
    type: GET_EXPENSE,
    payload: payload
  }
}

export const expenseData = (data) => (dispatch, getState) => {

  //console.log("u are inside the expenseData post request")
  //console.log('expense data : ', data)

  fetch('http://localhost:4000/users/expense', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: data.amount,
      category: data.category,
      chosenDate: data.chosenDate,
      comments: data.comments
    }),
  })
    .then(res => res.json())
    .then(resJSON => {
      //console.log("response after posting ur expense data: ", resJSON) // you will get JWT
      const action = getExpense(resJSON)
      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}

//getFullExpenseDetails fetch data from expense table

export const GET_FULL_EXPENSE_DETAILS = 'GET_FULL_EXPENSE_DETAILS'

function fullExpenseDetails(payload) {
  return {
    type: GET_FULL_EXPENSE_DETAILS,
    payload: payload
  }
}

export const getFullExpenseDetails = () => (dispatch, getState) => {

  //console.log("u are inside the fetch request getFullExpenseDetails")

  const state = getState()

  fetch('http://localhost:4000/users/expense')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log("expense details: ",responseJson)

      const action = fullExpenseDetails(responseJson)

      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}

//getSelectedExpenseDetails 

export const GET_SELECTED_EXPENSE_DETAILS = 'GET_SELECTED_EXPENSE_DETAILS'

function selectedExpenseDetails(payload) {
  return {
    type: GET_SELECTED_EXPENSE_DETAILS,
    payload: payload
  }
}

export const getSelectedExpenseDetails = (data) => (dispatch) => {

  //console.log("u are inside the fetch request GET_SELECTED_EXPENSE_DETAILS")

  fetch('http://localhost:4000/users/expense/date', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate: data.startDate,
      endDate: data.endDate
    }),
  })
    .then(res => res.json())
    .then(resJSON => {
      //console.log("response after posting ur expense date range", resJSON)
      const action = selectedExpenseDetails(resJSON)
      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}
//