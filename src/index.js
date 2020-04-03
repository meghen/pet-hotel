import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
// import * as serviceWorker from './serviceWorker';
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
  yield takeEvery('ADD_PET', addPet);
  yield takeEvery('ADD_OWNERS', addOwner);
  yield takeEvery('DELETE_OWNER', deleteOwner);
  yield takeEvery('DELETE_PET', deletePet);
  yield takeEvery('UPDATE_PET', updatePet);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

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

// sending a request to the server for owner data
function* getOwners() {
  const ownerResponse = yield axios.get('/owners')
  console.log('in the GET getOwners', ownerResponse)
  yield put({
      type: 'SET_OWNERS',
      payload: ownerResponse.data
  })
}

// The Reducer that stores the owner data on the client side
const ownerReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_OWNERS':
          return action.payload;
      default:
          return state;
  }
}

// The post to add a pet to the database.
function* addPet(action) {
let objectToSend = action.payload;
console.log('in post addPet', action.payload);
  yield axios.post('/pets', objectToSend)
      .catch((error) => {
          console.log(error);
      });
  yield put({ type: 'GET_PETS' });
}

// The POST to add an owner to the databse.
function* addOwner(action) {
  let objectToSend = action.payload;
  console.log('in post addOwner', action.payload);
    yield axios.post('/owners', objectToSend)
        .catch((error) => {
            console.log(error);
        });
    yield put({ type: 'GET_OWNERS' });
}

// The DELETE to remove an owner from the database.
function* deleteOwner(action) {
    yield axios.delete(`/owners/${action.payload}`)
        .catch((error) => {
            console.log(error);
        });
    yield put({ type: 'GET_OWNERS' });
}

// The DELETE to remove a pet from the database.
function* deletePet(action) {
  yield axios.delete(`/pets/${action.payload}`)
      .catch((error) => {
          console.log(error);
      });
  yield put({ type: 'GET_PETS' });
}

// The UPDATE to checkin and checkout a pet 
function* updatePet(action) {
  let objectToSend = action.payload;
  console.log('in updatePet', objectToSend);
  yield axios.put(`/post/${objectToSend}`)
  .catch((error) => {
      console.log(error);
  });
  yield put ({ type: 'GET_PETS' });
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



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//What is React.StrictMode?

