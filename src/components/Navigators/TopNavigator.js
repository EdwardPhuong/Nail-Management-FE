import { NavLink } from "react-router-dom";
import * as actions from "../../stores/actions/systemActions";
import { connect } from "react-redux";
import React, { Component } from "react";

class TopNavigator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleOnClick = () => {
		this.props.unSuccessfullyAuthenticate();
	};

	render() {
		return (
			<div className="top-navigator-container">
				<div className="top-navigator-content">
					<NavLink to="/dash-board" onClick={() => this.handleOnClick()}>
						Dash Board
					</NavLink>
					<NavLink to="/" onClick={() => this.handleOnClick()}>
						Manage Employee
					</NavLink>
					<NavLink to="/" onClick={() => this.handleOnClick()}>
						Manage Products
					</NavLink>
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
	return {
		unSuccessfullyAuthenticate: () => dispatch(actions.unSuccessfullyAuthenticate()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigator);
