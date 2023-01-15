import actionTypes from "../actions/actionTypes";

const initialState = {
	isAuthenticated: false,
	userInfo: null,
};

const systemReducer = (state = initialState, action) => {
	let copyState = { ...state };
	switch (action.type) {
		case actionTypes.SUCCESSFULLY_AUTHENTICATE:
			copyState.userInfo = action.userInfo;
			copyState.isAuthenticated = true;
			return {
				...copyState,
			};
		case actionTypes.UN_SUCCESSFULLY_AUTHENTICATE:
			copyState.isAuthenticated = false;
			copyState.userInfo = null;
			return {
				...copyState,
			};

		default:
			return state;
	}
};

export default systemReducer;
