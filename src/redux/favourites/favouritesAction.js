import { reduxConstants } from "../../utils/constants";

const addToFavourites = (payload) => {
	return {
		type: reduxConstants.addToFavourites,
		payload,
	};
};

const removeFromFavourites = (payload) => {
	return {
		type: reduxConstants.removeFromFavourites,
		payload,
	};
};

export { addToFavourites, removeFromFavourites };
