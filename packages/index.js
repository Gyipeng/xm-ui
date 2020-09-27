
import XMButton from './button/index.js'
import XMTag from './tag/index.js'
import XMCard from './card/index.js'

const components = [
  XMButton,
  XMTag,
  XMCard
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  XMButton,
  XMTag,
  XMCard

}
