import { Navigate } from "react-router-dom";
import React from "react";
import * as actions from "../stores/actions/systemActions";
import { connect } from "react-redux";

class Redirector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Message: "",
			isNavigating: true,
		};
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.isAuthenticatedRedux !== this.props.isAuthenticatedRedux) {
			this.setState({ isNavigating: true });
		}
	}

	NavigateToDashBoard() {
		let { isAuthenticatedRedux } = this.props;
		let { isNavigating } = this.state;
		console.log("Redirector", isAuthenticatedRedux);
		if (isAuthenticatedRedux && isNavigating) {
			console.log("Navigate To Dash Board");
			this.setState({ isNavigating: false });
			return <Navigate replace to="/dash-board" />;
		} else {
			console.log("Navigate To Login");
			this.setState({ isNavigating: false });
			return <Navigate replace to="/login" />;
		}
	}
	render() {
		let { isAuthenticatedRedux } = this.props;
		let { isNavigating } = this.state;
		console.log("Check Redirector: ", this.props);
		return (
			<React.Fragment>
				{isNavigating === true ? this.NavigateToDashBoard() : <div>Waiting</div>}
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
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Redirector);
