import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json";
import "./Product.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartAction";
import { addToFavourites } from "../../redux/favourites/favouritesAction";
import { Processor, VideoCard, PowerSupply, Storage, Ram, Motherboard } from "../../utils/ProductItemsData";


const Product = (props) => {
    const [product, setProduct] = useState({});
    const { match } = props;
    const productId = match.params.productId;

    const categoryValues = Object.values(products);
    const getCategory = () => {
        categoryValues.forEach((category) => {
            category.items.forEach((item)=> {
                if(item.id === productId){
                    console.log(category);
                    return category;
                }
            })
        })
    }

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
                            getCategory()==="processor"?
                                <Processor
                                    baseFrequency={product.baseFrequency}
                                    boostFrequency={product.boostFrequency}
                                    cores={product.cores}
                                    threads={product.threads}
                                    description={product.description}
                                />
                            : getCategory()==="video-card"?
                                <VideoCard
                                    baseFrequency={product.baseFrequency}
                                    boostFrequency={product.boostFrequency}
                                    cores={product.cores}
                                    threads={product.threads}
                                    description={product.description}
                                />
                            : getCategory()==="motherboard"?
                                <Motherboard
                                    baseFrequency={product.baseFrequency}
                                    boostFrequency={product.boostFrequency}
                                    cores={product.cores}
                                    threads={product.threads}
                                    description={product.description}
                                />
                            : getCategory()==="ram"?
                                <Ram
                                    baseFrequency={product.baseFrequency}
                                    boostFrequency={product.boostFrequency}
                                    cores={product.cores}
                                    threads={product.threads}
                                    description={product.description}
                                />
                            : getCategory()==="storage"?
                                <Storage
                                    baseFrequency={product.baseFrequency}
                                    boostFrequency={product.boostFrequency}
                                    cores={product.cores}
                                    threads={product.threads}
                                    description={product.description}
                                />
                            : getCategory()==="power-supply"?
                                <PowerSupply
                                    baseFrequency={product.baseFrequency}
                                    boostFrequency={product.boostFrequency}
                                    cores={product.cores}
                                    threads={product.threads}
                                    description={product.description}
                                />
                            : null
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
