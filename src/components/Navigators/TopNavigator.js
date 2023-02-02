import { NavLink } from "react-router-dom";
import * as actions from "../../stores/actions/systemActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import { animate, motion, Variant, AnimatePresence } from "framer-motion";
import { transform } from "framer-motion";

import DashBoard from "../../routes/DashBoard";
import ManageEmployee from "../../containers/components/ManageEmployee";
import "./TopNavigator.scss";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const arrowHover = {
	initial: {
		scale: 1.5,
		transition: { duration: 0.3 },
	},
};

const parentVariant = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { staggerChildren: 1 } },
};

const arrowRotate = {
	initial: { x: "10%" },
	animate: {
		x: "8%",
		transition: { duration: 3 },
	},
};

const navBarSlide = {
	initial: { width: "100%" },
	animate: {
		width: "9%",
		transition: { duration: 1 },
	},
};

const itemInvisible = {
	initial: { scale: 1 },
	animate: {
		scale: 0,
		transition: {
			duration: 1,
		},
	},
};

class TopNavigator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isExtended: true,
		};
	}

	handleOnClickLogOut = () => {
		this.props.unSuccessfullyAuthenticate();
	};

	handleOnClickDashBoard = () => {
		this.setState({ isExtended: !this.state.isExtended });
	};
	handleOnClickEmployee = () => {};
	handleOnClickProducts = () => {};
	handleOnClickArrow = () => {
		this.setState({ isExtended: !this.state.isExtended });
	};

	render() {
		let { isExtended } = this.state;

		console.log(isExtended);
		return (
			<React.Fragment>
				<div className="top-navigator-container">
					<div className="top-navigator-content">
						<motion.div
							className="top-navigator-arrow-animation"
							variants={container}
							initial="hidden"
							animate="visible">
							<motion.ul
								className="top-navigator-navbar"
								variants={navBarSlide}
								initial="initial"
								animate={isExtended === true ? "initial" : "animate"}>
								<motion.span
									className="top-navigator-item"
									variants={itemInvisible}
									initial="initial"
									animate={isExtended === true ? "initial" : "animate"}>
									<NavLink
										className="top-navigator-text-decoration"
										to="/dash-board"
										onClick={() => this.handleOnClickDashBoard()}>
										<span>Dash Board</span>
									</NavLink>
								</motion.span>

								<motion.span
									className="top-navigator-item"
									variants={itemInvisible}
									initial="initial"
									animate={isExtended === true ? "initial" : "animate"}>
									<NavLink
										className="top-navigator-item"
										to="/manage-employee"
										onClick={() => this.handleOnClickEmployee()}>
										<span className="top-navigator-text-decoration">
											Manage Employee
										</span>
									</NavLink>
								</motion.span>

								<motion.span
									className="top-navigator-item"
									variants={itemInvisible}
									initial="initial"
									animate={isExtended === true ? "initial" : "animate"}>
									<NavLink
										className="top-navigator-text-decoration"
										to="/manage-product"
										onClick={() => this.handleOnClickProducts()}>
										<span className="top-navigator-text-decoration">
											Manage Products
										</span>
									</NavLink>
								</motion.span>

								<motion.span
									className="top-navigator-item"
									variants={itemInvisible}
									initial="initial"
									animate={isExtended === true ? "initial" : "animate"}>
									<NavLink
										className="top-navigator-item"
										to="/"
										onClick={() => this.handleOnClickLogOut()}>
										<span className="top-navigator-text-decoration">
											Log Out
										</span>
									</NavLink>
								</motion.span>

								<motion.span
									variants={arrowRotate}
									initial={"initial"}
									animate={isExtended === true ? "initial" : "animate"}
									whileHover={arrowHover.initial}
									onClick={() => this.handleOnClickArrow()}
									className={
										isExtended === true
											? "top-navigator-extended"
											: "top-navigator-unextended"
									}>
									<i className="fa-solid fa-plus"></i>
								</motion.span>
							</motion.ul>
						</motion.div>
					</div>
				</div>
			</React.Fragment>
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
