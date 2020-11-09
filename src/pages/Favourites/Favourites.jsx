import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { removeFromFavourites } from "../../redux/favourites/favouritesAction";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./Favourites.css";

const Favourites = (props) => {
	return (
		<Layout>
			<div className="favourites-page container-fluid container-min-max-width d-flex flex-column justify-content-center align-items-center">
				{props.products.length ? (
					<div className="w-100">
						<div className="d-flex justify-content-between text-center h4 text-bold">
							<p className="w-50">Product</p>
							<p className="w-50">Price</p>
						</div>
						{props.products.map((product) => {
							return (
								<div
									className="d-flex justify-content-between align-items-center text-center"
									key={product.id}
								>
									<div className="w-50 d-flex flex-column justify-content-center align-items-center">
										<Link to={`/product/${product.id}`}>
											<img src={product.image} alt="Produs" />
											<p>{product.name}</p>
										</Link>
									</div>
									<p className="w-50">
										{product.price} {product.currency}
									</p>
									<div
										onClick={() =>
											props.removeFromFavourites({ id: product.id })
										}
									>
										<Close />
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="d-flex flex-column align-items-center">
						<p className="h3">There are no favourites!</p>
						<Link to="/">
							<button className="btn btn-outline-dark">Back to home</button>
						</Link>
					</div>
				)}
			</div>
		</Layout>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.favourites.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromFavourites: (payload) => dispatch(removeFromFavourites(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
