import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json";
import ProductList from "../../components/ProductList/ProductList";

const Category = (props) => {
	const [category, setCategory] = useState({});
	const [items, setItems] = useState([]);
	const { match } = props;
	const categoryName = match.params.categoryName;
	useEffect(() => {
		setCategory(products[categoryName]);
		setItems(products[categoryName].items);
	},[categoryName]);
	return (
		<Layout>
			<div className="container-fluid container-min-max-width">
				<h2>{category.name}</h2>
				<ProductList products={items} />
			</div>
		</Layout>
	);
};

export default Category;
