import { combineReducers } from 'redux';
import axios from 'axios';
import user from './user';


// axios.defaults.baseURL = 'http://localhost:3065/api';

const rootReducer = combineReducers({ // 하나로 묶어주는 친구 combineReducers
	user
});

export default rootReducer;