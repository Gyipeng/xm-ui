
import State from './src/state'

State.install = function (Vue) {
  Vue.component(State.name, State)
}

export default State
