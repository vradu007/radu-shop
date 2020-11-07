import { signInWithGoogle, signOut } from "../../apis/firebase/firebase";
import { reduxConstants as Constants } from "../../utils/constants";

const startLoading = () => {
	return {
		type: Constants.userStartLoading,
	};
};
const updateUserData = (payload) => {
	return {
		type: Constants.updateUserData,
		payload,
	};
};
const updateUserError = (payload) => {
	return {
		type: Constants.updateUserError,
		payload,
	};
};

const loginUser = () => {
	return (dispatch) => {
		dispatch(startLoading());

		signInWithGoogle()
			.then((userData) => {
				dispatch(updateUserData(userData.user));
			})
			.catch((error) => {
				dispatch(updateUserError(error));
			});
	};
};

const logoutUser = () => {
	return (dispatch) => {
		dispatch(startLoading());

		signOut()
			.then(() => {
				dispatch(updateUserData(null));
			})
			.catch((error) => {
				dispatch(updateUserError(error));
			});
	};
};

export { loginUser, logoutUser };
