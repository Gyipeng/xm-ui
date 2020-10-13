
import XMButton from './button/index.js'
import XMTag from './tag/index.js'
import XMCard from './card/index.js'
import XMAudio from './audio/index.js'
import XMVideo from './video/index.js'
import XMLimit from './limit/index.js'
import XMTextEllipsis from './text-ellipsis/index.js'
const components = [
  XMButton,
  XMTag,
  XMCard,
  XMAudio,
  XMVideo,
  XMLimit,
  XMTextEllipsis
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
  XMCard,
  XMAudio,
  XMVideo,
  XMLimit,
  XMTextEllipsis

}
