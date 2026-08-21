import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import "./Login.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/user/userAction";
import { providerConstants} from "../../utils/constants";

const Login = (props) => {
	const { user, error, history, signInWithGoogle, signInWithFacebook } = props;
	useEffect(() => {
		if (user) {
            history.push("/");
        }
	}, [user, history]);

    const handleClick = (provider) => {
        switch(provider){
            case providerConstants.facebook:
                signInWithFacebook();
                break;
            case providerConstants.google:
                signInWithGoogle();
                break;
        }
    }

	return (
		<div className="login-page">
			<Link to="/">
				<img src={Logo} alt="logo" className="mb-5" />
			</Link>
			<h1 className="h2">Login</h1>
			<p>Choose the provider you want to use to login:</p>
			{error ? <p className="text-danger">{error.message || "Login failed. Please try again."}</p> : null}
			<button
				className="btn btn-outline-dark d-flex align-items-center"
                onClick={() => handleClick(providerConstants.google)}
			>
				<Google className="w-50 mr-3" />
				<span className="text-nowrap">Login with Google</span>
			</button>
            <button 
				className="btn btn-outline-dark d-flex align-items-center m-2"
				onClick={() => handleClick(providerConstants.facebook)}
			>
				<Facebook className="w-50 mr-3" />
				<span className="text-nowrap">Login with Facebook</span>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user.data,
		error: state.user.error,
	};
}

function mapDispatchToProps(dispatch) {
	return {
        signInWithGoogle: () => dispatch(loginUser(providerConstants.google)),
        signInWithFacebook: () => dispatch(loginUser(providerConstants.facebook)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
