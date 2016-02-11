import h from 'vdux/element'

export default function render(state) {
  const name = state.get('name')
  const id = state.get('id')
    return h('div', {}, [name]
     )
}
