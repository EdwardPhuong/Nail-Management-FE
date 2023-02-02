import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../stores/actions/userActions";
import TopNavigator from "../../components/Navigators/TopNavigator";
import { animate, motion, transform } from "framer-motion";

import "./ManageProduct.scss";

const rateBackgroundColor = {
	initial: {
		backgroundColor: "yellow",
	},
	animate: {
		backgroundColor: ["#9CA5F0", "#727FF5", "#313C9E", "#727FF5", "#9CA5F0"],
		transition: {
			duration: 5,
			repeat: Infinity,
		},
	},
};

const starBackgroundAnimation = {
	initial: { rotate: 0 },
	animate: {
		rotate: 360,
		transition: {
			ease: "linear",
			duration: 3,
			repeat: Infinity,
		},
	},
};

class ManageProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCreateProduct: true,
			productName: "",
			productBranchCode: "",
			productImage: "",
			productRate: "",
		};
	}

	onClickCreateProduct = () => {
		this.setState({ isCreateProduct: true });
	};

	handleOncChangeInput = (event, id) => {
		let value = event.target.value;
		let copyState = { ...this.state };
		copyState[id] = value;
	};

	render() {
		let { isCreateProduct } = this.state;
		let copyState = { ...this.state };
		console.log("Create Product Check State: ", this.state);
		console.log("Create Product Check Props: ", this.props);
		return (
			<div className="manage-Product-container">
				{isCreateProduct ? (
					<div className="manage-Product-content">
						<div className="manage-Product-header">Product Management System</div>
						<div className="manage-Product-body row">
							<div className="col-3 form-group">
								<label className="me-label">Product Name</label>
								<input
									className="form-control"
									onChange={(event) =>
										this.handleOncChangeInput(event, "productName")
									}></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Product Branch Code</label>
								<input
									className="form-control"
									onChange={(event) =>
										this.handleOncChangeInput(event, "productBranchCode")
									}></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Product Image</label>
								<input className="form-control" type="file"></input>
							</div>
							<div className="col-3 form-group">
								<label className="me-label">Product Rate</label>
								<motion.span
									className="form-control me-rate"
									animate={rateBackgroundColor.animate}>
									<motion.label
										className="mp-rate-star"
										variants={starBackgroundAnimation}
										animate="animate">
										<i className="fa-solid fa-star"></i>
									</motion.label>
									5.0
								</motion.span>
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
					<div className="manage-Product-page">
						<div className="manage-Product-body">
							<motion.div className="me-button-create-Product">
								<button
									className="meb-create-Product"
									onClick={() => this.onClickCreateProduct()}>
									Create Product
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
