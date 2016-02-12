  function render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const addToCart = (e) => {
      e.preventDefault()
      this.props.addToCart(id)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {name}</div>
        <div><a href='' onClick={addToCart}>Add to Cart</a></div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }


