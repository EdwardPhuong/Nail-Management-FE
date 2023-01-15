import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.scss";

class Bubble extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentDidMount() {}

	async componentDidUpdate(prevProps, prevState, snapshot) {}

	render() {
		return (
			<body className="login-container">
				<div className="login-background">
					<div className="bubble x1"></div>
					<div className="bubble x2"></div>
					<div className="bubble x3"></div>
					<div className="bubble x4"></div>
					<div className="bubble x5"></div>
					<div className="bubble x6"></div>
					<div className="bubble x7"></div>
					<div className="bubble x8"></div>
					<div className="bubble x9"></div>
					<div className="bubble x10"></div>
				</div>
			</body>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Bubble);
