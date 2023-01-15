import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import systemReducer from "./systemReducer";

const persistCommonConfig = {
	storage: storage,
	stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
	...persistCommonConfig,
	key: "user",
	whitelist: ["isAuthenticated", "userInfo"],
};

export default (history) =>
	combineReducers({
		router: connectRouter(history),
		system: persistReducer(userPersistConfig, systemReducer),
	});
