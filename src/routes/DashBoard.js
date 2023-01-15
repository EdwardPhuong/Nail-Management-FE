import React, { Component } from "react";

import appService from "../services/appService";
import { connect } from "react-redux";
import * as actions from "../stores/actions/systemActions";
import TopNavigator from "../components/Navigators/TopNavigator";

import "./HomePage.scss";

class DashBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}

	render() {
		return (
			<div className="dash-board-container">
				<div className="dash-board-content">
					<div className="dash-board-header">
						<TopNavigator />
					</div>
					<div className="dash-board-left"></div>
					<div className="dash-board-right"></div>
					<div className="dash-board-detais"></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticatedRedux: state.system.isAuthenticated,
		userInfo: state.system.userInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
