import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//This is the listener function
function* rootSaga() {
  yield takeEvery('GET_OWNERS', getPets);
  yield takeEvery('GET_PETS', getOwners);
}

//this is the sagas function sending a request to the server for Pets data
function* getPets() {
  const petResponse = yield axios.get('/pets')
  console.log('in the GET getPets', petResponse)
  yield put({
      type: 'SET_PETS',
      payload: petResponse.data
  })
}

// The Reducer that stores the pets data on the client side 
const petsReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_PETS':
          return action.payload;
      default:
          return state;
  }
}


function* getOwners() {
  const ownerResponse = yield axios.get('/owners')
  console.log('in the GET getOwners', ownerResponse)
  yield put({
      type: 'SET_OWNERS',
      payload: petResponse.data
  })
}


const ownerReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_OWNERS':
          return action.payload;
      default:
          return state;
  }
}


// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
      petsReducer,
      ownerReducer,

  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//What is React.StrictMode?

