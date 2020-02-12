import { all, fork, call } from 'redux-saga/effects';
import axios from "axios"
import user from './user';

axios.defaults.baseURL = 'http://localhost:9008';

export default function* rootSaga() {
	yield all([
		call(user),
	]);
}