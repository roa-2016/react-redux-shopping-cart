import h from 'vdux/element'

export default function render(state) {
  const name = state.props.get('name')
  const id = state.props.get('id')
    return h('a', {href: '/products/' + id}, [name])
}
