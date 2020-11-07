import {reduxConstants as Constants} from '../../utils/constants';

const addToCart = (payload) => {
    return {
        type: Constants.addToCart,
        payload
    }
}

const removeFromCart = (payload) => {
    return {
        type: Constants.removeFromCart,
        payload
    }
}

export {addToCart, removeFromCart};