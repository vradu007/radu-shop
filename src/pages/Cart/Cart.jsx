import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/cart/cartAction";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import Layout from "../../components/Layout/Layout";
import "./Cart.css";

const Cart = (props) => {
	const totalSum = (products) => {
		return products.reduce((acc, product) => {
			return acc + product.quantity * product.price;
		}, 0);
	};

	return (
		<Layout>
			<div
				className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
			>
				{props.products.length ? (
					<div className="w-100">
						<div className="d-flex justify-content-between text-center h4 text-bold">
							<p className="w-25">Product</p>
							<p className="w-25">Price</p>
							<p className="w-25">Quantity</p>
							<p className="w-25">Total</p>
						</div>
						{props.products.map((product) => {
							return (
								<div
									className="d-flex justify-content-between align-items-center text-center"
									key={product.id}
								>
									<div className="w-25 d-flex flex-column justify-content-center align-items-center">
										<Link to={`/product/${product.id}`}>
											<img src={product.image} alt="Produs" />
											<p>{product.name}</p>
										</Link>
									</div>

									<p className="w-25">
										{product.price} {product.currency}
									</p>
									<p className="w-25">{product.quantity}</p>
									<div className="w-25 d-flex justify-content-center">
										<p className="mr-2">
											{product.price * product.quantity} {product.currency}
										</p>
										<div
											onClick={() => props.removeFromCart({ id: product.id })}
										>
											<Close />
										</div>
									</div>
								</div>
							);
						})}
						<div className="d-flex justify-content-end border-top">
							<div className="w-25 d-flex align-items-center justify-content-center">
								<p className="my-4 text-center font-weight-bold">
									Total amount:{" "}
								</p>
							</div>
							<div className="w-25">
								<p className="my-4 text-center">
									{totalSum(props.products)} {props.products[0].currency}
								</p>
							</div>
						</div>
					</div>
				) : (
					<div className="d-flex flex-column align-items-center">
						<p className="h3">Cart is empty!</p>
						<Link to="/">
							<button className="btn btn-outline-dark">Back to home</button>
						</Link>
					</div>
				)}
			</div>
		</Layout>
	);
};

function mapStateToProps(state) {
	return {
		products: state.cart.products,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromCart: (payload) => dispatch(removeFromCart(payload)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
