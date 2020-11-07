import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json";
import HomeCategory from "./../../components/HomeCategory/HomeCategory";

const Home = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const payload = Object.keys(products);
		setCategories(payload);
	}, []);

	return (
		<Layout>
			<div className="container-fluid container-min-max-width">
				<div className="row">
					{categories.map((category, index) => (
						<HomeCategory
							key={index}
							route={category}
							name={products[category].name}
							description={products[category].description}
							image={products[category].image}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Home;
