import {
	signInWithFacebook,
	signInWithGoogle,
	signOut,
} from "../../apis/firebase/firebase";
import { reduxConstants, providerConstants } from "../../utils/constants";

const startLoading = () => {
	return {
		type: reduxConstants.userStartLoading,
	};
};
const updateUserData = (payload) => {
	return {
		type: reduxConstants.updateUserData,
		payload,
	};
};
const updateUserError = (payload) => {
	return {
		type: reduxConstants.updateUserError,
		payload,
	};
};

const loginUser = (provider) => {
	return (dispatch) => {
		dispatch(startLoading());

		switch (provider) {
			case providerConstants.google:
				signInWithGoogle()
					.then((userData) => {
						dispatch(updateUserData(userData.user));
					})
					.catch((error) => {
						dispatch(updateUserError(error));
                    });
                break;
			case providerConstants.facebook:
				signInWithFacebook()
					.then((userData) => {
						dispatch(updateUserData(userData.user));
					})
					.catch((error) => {
						dispatch(updateUserError(error));
                    });
                break;
		}
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
