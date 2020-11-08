import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cartAction";
import { addToFavourites } from "../../../redux/favourites/favouritesAction";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
	const { name, price, currency, image, id } = props;

	return (
		<div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
			<Link
				to={`/product/${id}`}
				className="d-flex flex-column align-items-center"
			>
				<img src={image} alt="productPhoto" className="mb-2" />
				<p className="mb-1 text-center">{name}</p>
				<p className="text-center">{price + currency}</p>
			</Link>
			<button
				className="btn btn-outline-dark"
				onClick={() =>
					props.addToCart({
						product: {
							id,
							name,
							price,
							currency,
							image,
						},
					})
				}
			>
				Add to cart
			</button>
			<button
				className="btn btn-outline-dark m-2"
				onClick={() =>
					props.addToFavourites({
						product: {
							id,
							name,
							price,
							currency,
							image,
						},
					})
				}
			>
				Add to favourites
			</button>
		</div>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (product) => dispatch(addToCart(product)),
		addToFavourites: (product) => dispatch(addToFavourites(product)),
	};
}

export default connect(null, mapDispatchToProps)(ProductItem);
