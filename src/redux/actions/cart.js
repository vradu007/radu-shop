const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

const removeFromCart = (payload) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}

export {addToCart, removeFromCart};