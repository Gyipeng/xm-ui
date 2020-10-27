
import checkedCard from './src/checked-card.vue'

checkedCard.install = function (Vue) {
  Vue.component(checkedCard.name, checkedCard)
}

export default checkedCard
