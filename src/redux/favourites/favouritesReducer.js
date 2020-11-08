import { reduxConstants } from "../../utils/constants";

const initialState = {
	products: [],
};

const favouritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case reduxConstants.addToFavourites:
			let productInFavorites = false;
			state.products.map((product) => {
				if (product.id === action.payload.product.id) {
					productInFavorites = true;
				}
			});
			if (!productInFavorites) {
				return Object.assign({}, state, {
					products: [...state.products, {...action.payload.product}],
				});
            }
        case reduxConstants.removeFromFavourites:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default: return state;
	}
};

export {favouritesReducer};
