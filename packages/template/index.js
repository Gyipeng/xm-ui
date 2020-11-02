import Template from './src/template.vue'

Template.install = function (Vue) {
  Vue.component(Template.name, Template)
}

export default Template
