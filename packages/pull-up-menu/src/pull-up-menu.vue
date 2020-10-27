
<template>
  <div class="xm-pull-up-menu" v-clickoutside="handleClose" >
    <ul class="xm-pull-up-menu__content" v-show="show" >
    <li class="menu-item" v-for="item in menus.menus" :key="item.key" @click="handMenuItemClick(item)" >{{item.key}}</li>
  </ul>
    <div class="xm-pull-up-menu__title"  @click="handMenuClick(menus)" >{{menus.key}}</div>
  </div>

</template>

<script>
import { mixin } from '../../../utils/minxin'
export default {
  name: 'xm-pull-up-menu',
  data () {
    return {
      show: false

    }
  },
  mixins: [mixin],
  props: {
    menus: {}

  },
  methods: {
    handleClose () {
      this.show = false
    },
    handMenuClick (menus) {
      this.show = !this.show
      this.$emit('handMenuClick', menus)
    },
    handMenuItemClick (e) {
      this.$emit('handMenuItemClick', e)
    }
  }
}
</script>
