import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
	storage: storage,
	stateReconciler: autoMergeLevel2,
};

export default (history) =>
	combineReducers({
		router: connectRouter(history),
	});
