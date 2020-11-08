import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as Favorites } from "../../assets/icons/heart.svg";
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/userAction";

const Header = (props) => {
	return (
		<header className="border-bottom mb-3">
			<div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
				<Link to="/" className="my-3">
					<img src={Logo} alt="radu-shop" className="logo" />
				</Link>
				<div>
					{props.user ? <p>Hello, {props.user.displayName}!</p> : null}
					<div className="d-flex justify-content-end">
						{props.user ? (
							<p className="logout h5" onClick={() => props.signOut()}>
								Logout
							</p>
						) : (
							<Link to="/login" className="h5 mb-0">
								Login
							</Link>
						)}
						<div className="d-flex align-items-center">
							<Link to="/cart" className="d-flex">
								<ShoppingCart className="ml-2" />
								<p className="ml-1 mb-0">{props.numberOfCartProducts}</p>
							</Link>
							<Link to="/favourites" className="d-flex">
								<Favorites className="ml-2" />
								<p className="ml-1 mb-0">{props.numberOfFavouriteProducts}</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

function mapStateToProps(state) {
	return {
        numberOfCartProducts: state.cart.products.length,
        numberOfFavouriteProducts: state.favourites.products.length,
		user: state.user.data,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		signOut: () => dispatch(logoutUser()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
