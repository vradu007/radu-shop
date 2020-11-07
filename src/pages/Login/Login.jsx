import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import "./Login.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/user";

const usePrevious = (value) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

const Login = (props) => {
	// componentDidUpdate(prevProps) {
	//     if (this.props.user !== prevProps.user) {
	//         this.props.history.push('/');
	//     }
	// }
	console.log(props);
	const { user, history } = props;
	const previous = usePrevious({ user, history });
	useEffect(() => {
		if (props.user !== previous.user) {
			props.history.push("/");
		}
	}, [props.user, props.history, previous.user]);

	return (
		<div className="login-page">
			<Link to="/">
				<img src={Logo} alt="logo" className="mb-5" />
			</Link>
			<h1 className="h2">Login</h1>
			<p>Alege providerul cu care vrei să vrei să te loghezi:</p>
			<button
				className="btn btn-outline-dark d-flex align-items-center"
				onClick={() => props.signInWithGoogle()}
			>
				<Google className="w-50 mr-3" />
				<span className="text-nowrap">Loghează-te cu Google</span>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user.data,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		signInWithGoogle: () => dispatch(loginUser()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
