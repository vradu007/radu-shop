import { reduxConstants as Constants } from "../../utils/constants";

const initialState = {
	data: null,
	loading: false,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case Constants.userStartLoading:
			return Object.assign({}, state, {
				loading: true,
			});
		case Constants.updateUserData:
			return Object.assign({}, state, {
				data: action.payload,
				loading: false,
				error: null,
			});
		case Constants.updateUserError:
			return Object.assign({}, state, {
				error: action.payload,
				loading: false,
			});
		default:
			return state;
	}
};

export { userReducer };
