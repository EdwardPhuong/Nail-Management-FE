import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import appService from "../services/appService";
import { connect } from "react-redux";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			name: "Edward",
		};
	}

	handleGetData = async (data) => {
		let response = await appService.getData(data);
		console.log("Response: ", response.errMessage);
	};
	render() {
		let { name, data } = this.state;
		data.name = name;
		return (
			<button className="btn btn-primary" onClick={() => this.handleGetData(data)}>
				{name}
			</button>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
