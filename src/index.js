import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import rootReducer from "./stores/reducers/rootReduces";
import reduxStore, { persistor } from "./redux";
import { createStore } from "redux";

import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
