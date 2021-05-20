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
import ButtonEllipsis from './button-ellipsis/index.js'
import Tabs from './tabs/index.js'
import Swiper from './swiper/index.js'
import Template from './template/index.js'
import Img from './img/index.js'
import Fold from './flod/index.js'
import Chat from './chat/index.js'
import Permission from './permission/index.js'
import Action from './action/index.js'
import Editor from './editor/index.js'
import Upload from './upload/index.js'
import State from './state/index.js'
import MediaPhone from './media-phone/index.js'

import style from '../utils/style'
import filters from '../utils/filter'

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
  ButtonMore,
  ButtonEllipsis,
  Tabs,
  Swiper,
  Template,
  Img,
  Fold,
  Chat,
  Permission,
  Action,
  Editor,
  Upload,
  State,
  MediaPhone
]

const directives = {
  width: style.width,
  color: style.color,
  'bg-color': style.bgColor,
  height: style.height,
  padding: style.padding,
  margin: style.margin,
  font: style.font

}

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
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
  ButtonMore,
  ButtonEllipsis,
  Tabs,
  Swiper,
  Template,
  Img,
  Fold,
  Chat,
  Permission,
  Action,
  Editor,
  Upload,
  State,
  MediaPhone

}
