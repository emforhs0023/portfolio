export const initialState = {
	me: null
}; 

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" //액션의 이름
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS" //액션의 이름
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE" //액션의 이름

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_REQUEST : {
			return {
				...state,
				isLoggingIn: true,
				logInErrorReason: '',
			}
		}
		default :
			return state
	}
}

export default reducer