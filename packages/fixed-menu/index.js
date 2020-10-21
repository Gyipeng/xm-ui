import fixedMenu from './src/fixed-menu.vue'

fixedMenu.install = function (Vue) {
  Vue.component(fixedMenu.name, fixedMenu)
}

export default fixedMenu
