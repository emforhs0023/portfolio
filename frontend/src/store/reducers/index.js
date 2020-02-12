import { combineReducers } from 'redux';
import user from './user';


const rootReducer = combineReducers({ // 하나로 묶어주는 친구 combineReducers
	user
});

 
export default rootReducer