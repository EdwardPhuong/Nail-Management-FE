import React, { Component, Fragment } from "react";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { path } from "../constants/constants";
import HomePage from "../routes/HomePage";
import "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<BrowserRouter>
					<div className="app-container">
						<div className="app-content">
							<Routes>
								<Route path={path.HOMEPAGE} element={<HomePage />} />
							</Routes>
						</div>
					</div>
				</BrowserRouter>
			</Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React from "react";

// import logo from "./logo.svg";
// import "./App.css";

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<p>
// 						Edit <code>src/App.js</code> and save to reload.
// 					</p>
// 					<a
// 						className="App-link"
// 						href="https://reactjs.org"
// 						target="_blank"
// 						rel="noopener noreferrer">
// 						Learn React
// 					</a>
// 				</header>
// 			</div>
// 		);
// 	}
// }
// export default App;
