import React, {Component}from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './Reducer'
import Navigator from './Navigation/Navigator'
import thunk from 'redux-thunk';

const reducer = combineReducers( reducers)

const store = createStore(reducer, applyMiddleware(thunk))



class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Navigator />
        </Provider>
      );
    }
  }

export default App