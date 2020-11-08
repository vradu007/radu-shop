const reduxConstants = {
    addToCart: "ADD_TO_CART",
    removeFromCart: "REMOVE_FROM_CART",
    addToFavourites: "ADD_TO_FAVOURITES",
    removeFromFavourites: "REMOVE_FROM_FAVOURITES",
    userStartLoading: "START_LOADING",
    updateUserData: "UPDATE_USER_DATA",
    updateUserError: "UPDATE_USER_ERROR",
};

const providerConstants = {
    google: "SIGN_IN_WITH_GOOGLE",
    facebook: "SIGN_IN_WITH_FACEBOOK",
}

export {
    reduxConstants,
    providerConstants,
};