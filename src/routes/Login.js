import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate, NavLink } from "react-router-dom";
import "./Login.scss";
import Redirector from "./Redirector";
import * as actions from "../stores/actions/systemActions";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			isShowPassword: false,
		};
	}

	async componentDidMount() {}

	async componentDidUpdate(prevProps, prevState, snapshot) {}

	handleSubmitButton = () => {
		let { username, password } = this.state;
		let account = {};
		account.username = username;
		account.password = password;
		this.props.successfullyAuthenticate(account);
	};

	handleOnChangeInput = (event, id) => {
		let valueInput = event.target.value;
		let copyState = { ...this.state };
		copyState[id] = valueInput;
		this.setState({
			...copyState,
		});
	};

	render() {
		let { username, password, isShowPassword } = this.state;
		console.log("Edward Check Props: ", this.props);
		console.log("Edwarc Check State: ", this.state);
		return (
			<React.Fragment>
				<div className="login-container">
					<div className="login-content">
						<div className="background-login-form ">
							<div className="content-login-form row">
								<div className="header-login-form">
									<span>Nail Management System</span>
								</div>
								<div className="title-login-form">login</div>
								<div className="input-login-form from-group">
									<label className="label-login">Username: </label>
									<input
										className="input-login form-control"
										type="email"
										name="username"
										value={username}
										onChange={(event) =>
											this.handleOnChangeInput(event, "username")
										}
									/>
								</div>
								<div className="input-login-form from-group">
									<label className="label-login">Password: </label>
									<input
										className="input-login form-control"
										type={isShowPassword ? "text" : "password"}
										name="password"
										value={password}
										onChange={(event) =>
											this.handleOnChangeInput(event, "password")
										}
									/>
								</div>
								<NavLink
									className="button-login"
									onClick={() => this.handleSubmitButton()}
									to="/"
									end>
									<span>Submit</span>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticatedRedux: state.system.isAuthenticated,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		successfullyAuthenticate: (userInfo) =>
			dispatch(actions.successfullyAuthenticate(userInfo)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
