
import Button from './button/index.js'
import Tag from './tag/index.js'
import Card from './card/index.js'
import Audio from './audio/index.js'
import Video from './video/index.js'
import Limit from './limit/index.js'
import TextEllipsis from './text-ellipsis/index.js'
import CheckedCard from './checked-card/index.js'
import CheckedCardGroup from './checked-card-group/index.js'
import Phone from './phone/index.js'
import FixedMenu from './fixed-menu/index.js'
import PullUpMenu from './pull-up-menu/index.js'
import Media from './media/index.js'
import MediaBox from './media-box/index.js'
import ButtonMore from './button-more/index.js'
const components = [
  Button,
  Tag,
  Card,
  Audio,
  Video,
  Limit,
  TextEllipsis,
  CheckedCard,
  CheckedCardGroup,
  Phone,
  FixedMenu,
  PullUpMenu,
  Media,
  MediaBox,
  ButtonMore
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
  Button,
  Tag,
  Card,
  Audio,
  Video,
  Limit,
  TextEllipsis,
  CheckedCard,
  CheckedCardGroup,
  Phone,
  FixedMenu,
  PullUpMenu,
  Media,
  MediaBox,
  ButtonMore

}
