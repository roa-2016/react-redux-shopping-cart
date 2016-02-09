export function subtractOne(id) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    id: parseInt(id)
  }
}

export function addOne(id) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    id: parseInt(id)
  }
}

export function addToCart(id) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    id: parseInt(id)
  }
}

export function addToWishlist(id) {
return {
    type: 'ADD_PRODUCT_TO_WISHLIST',
    id: parseInt(id)
  }
}
