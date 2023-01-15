import actionTypes from "./actionTypes";

export const successfullyAuthenticate = (userData) => ({
	type: actionTypes.SUCCESSFULLY_AUTHENTICATE,
	userInfo: userData,
});
export const unSuccessfullyAuthenticate = () => ({
	type: actionTypes.UN_SUCCESSFULLY_AUTHENTICATE,
});
