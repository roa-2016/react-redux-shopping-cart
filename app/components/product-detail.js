import h from 'vdux/element'

export default function render(state) {
  console.log(state);
  const name = state.get('name')
  return h('div', {class: 'product'}, name)
    //<div className='product' id={id}>
    //<div> Detailed view of a product {name}</div>
    //<div><a href='' onClick={addToCart}>Add to Cart</a></div>
    //<div><Link to='/'>View all</Link></div>
    //</div>
    //)
}




