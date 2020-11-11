import React, { useState, useEffect, useMemo } from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json";
import "./Product.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartAction";
import { addToFavourites } from "../../redux/favourites/favouritesAction";
import {
	Processor,
	VideoCard,
	PowerSupply,
	Storage,
	Ram,
	Motherboard,
} from "../../utils/ProductItemsData";

const Product = (props) => {
	const [product, setProduct] = useState({});
	const { match } = props;
	const productId = match.params.productId;

	const categoryValues = Object.values(products);

	const category = useState(() => {
		for (const category of categoryValues) {
			for (const item of category.items) {
				if (item.id == productId) {
					return category;
				}
			}
		}
	}, [categoryValues, productId]);

	const conditionallyRender = (category) => {
        console.log(category[0].name);
		switch (category[0].name) {
			case "Processors":
				return (
					<Processor
						baseFrequency={product.baseFrequency}
						boostFrequency={product.boostFrequency}
						cores={product.cores}
						threads={product.threads}
						description={product.description}
						buildProcess={product.buildProcess}
					/>
				);
			case "Video Cards":
				return (
					<VideoCard
						targetResolution={product.targetResolution}
						vram={product.vram}
						brand={product.brand}
						description={product.description}
					/>
				);
			case "Motherboards":
				return (
					<Motherboard
						size={product.size}
						compatibleBrand={product.compatibleBrand}
						brand={product.brand}
						socket={product.socket}
						description={product.description}
					/>
				);
			case "Ram-modules":
				return (
					<Ram
						baseFrequency={product.baseFrequency}
						boostFrequency={product.boostFrequency}
						cores={product.cores}
						threads={product.threads}
						description={product.description}
					/>
				);
			case "Storage":
				return (
					<Storage
						baseFrequency={product.baseFrequency}
						boostFrequency={product.boostFrequency}
						cores={product.cores}
						threads={product.threads}
						description={product.description}
					/>
				);
			case "Power Supplies":
				return (
					<PowerSupply
						baseFrequency={product.baseFrequency}
						boostFrequency={product.boostFrequency}
						cores={product.cores}
						threads={product.threads}
						description={product.description}
					/>
				);
		}
	};

	useEffect(() => {
		const productItems = categoryValues.reduce((acc, category) => {
			return [...acc, ...category.items];
		}, []);
		const currentProduct = productItems.find((product) => {
			return Number(productId) === product.id;
		});
		setProduct(currentProduct);
	}, [props]);

	return (
		<Layout>
			<div className="product-page container-fluid container-min-max-width">
				<h1 className="my-5 h2">{product.name}</h1>
				<div className="product-info d-flex">
					<div className="image-wrapper d-flex mr-5">
						<img src={product.image} alt="Product presentation" />
					</div>
					<div className="product-details">
						<p className="h3 text-danger">
							{product.price} {product.currency}
						</p>
						<div>
							<button
								className="btn btn-dark mb-4 font-weight-bold"
								onClick={() => {
									props.addToCart({
										product: {
											id: product.id,
											name: product.name,
											price: product.price,
											currency: product.currency,
											image: product.image,
										},
									});
								}}
							>
								Add to cart
							</button>
						</div>
						<div>
							<button
								className="btn btn-dark mb-4 font-weight-bold"
								onClick={() => {
									props.addToFavourites({
										product: {
											id: product.id,
											name: product.name,
											price: product.price,
											currency: product.currency,
											image: product.image,
										},
									});
								}}
							>
								Add to favourites
							</button>
						</div>
                        {
                            conditionallyRender(category)
                        }
					</div>
				</div>
			</div>
		</Layout>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (payload) => dispatch(addToCart(payload)),
		addToFavourites: (payload) => dispatch(addToFavourites(payload)),
	};
}

export default connect(null, mapDispatchToProps)(Product);
