import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import btnOpenModal from '../openModal/reducer';
import userInfo from '../users/reducer';

export default combineReducers({
  routing: routerReducer,
  btnOpenModal,
  userInfo,
});
