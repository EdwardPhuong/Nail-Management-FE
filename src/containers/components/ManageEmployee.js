import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../stores/actions/userActions";
import TopNavigator from "../../components/Navigators/TopNavigator";
import { motion } from "framer-motion";

import "./ManageEmployee.scss";

class ManageEmployee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCreateEmployee: false,
		};
	}

	onClickCreateEmployee = () => {
		this.setState({ isCreateEmployee: true });
	};

	render() {
		let { isCreateEmployee } = this.state;
		return (
			<div className="manage-employee-container">
				{isCreateEmployee ? (
					<div className="manage-employee-content">
						<div className="manage-employee-header">Membership Management System</div>
						<div className="manage-employee-body row">
							<div className="col-3 form-group">
								<label className="me-label">Username</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Password</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Email Address</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Gender</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Rank</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Character</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Nick Name</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Age</label>
								<input className="form-control"></input>
							</div>
							<div className="col-3 me-button-submit">
								<button
									type="button"
									className="btn btn-outline-primary form-control">
									Submit
								</button>
							</div>

							<div className="col-3 me-button-submit">
								<button
									type="button"
									className="btn btn-outline-secondary form-control">
									Cancel
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className="manage-employee-page">
						<div className="manage-employee-body">
							<motion.div className="me-button-create-employee">
								<button
									className="meb-create-employee"
									onClick={() => this.onClickCreateEmployee()}>
									Register Membership
								</button>
							</motion.div>
							<div className="me-top-navigator">
								<TopNavigator />
							</div>
						</div>
					</div>
				)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployee);
