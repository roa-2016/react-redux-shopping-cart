function calculatePrice(products, cart) {
  let subtotal = 0
  products.forEach(function(product) {
    if(cart.indexOf(product.get('id')) > -1 ) {
      subtotal += product.get('price')
    }
  })
  return subtotal
}

export default calculatePrice
