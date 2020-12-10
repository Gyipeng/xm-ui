
<template>
  <div class="xm-fixed-menu">
    <xm-phone>
      <template  slot="footer">
       <div class="xm-fixed-menu__content">
         <!--<div class="xm-fixed-menu__items" >-->
         <div class="xm-fixed-menu is-bottom">
             <xm-pull-up-menu
               :menus="item"
               v-for="(item,index) in menus"
               :key="index"
               @handMenuClick="handMenuClick"
               @handMenuItemClick="handMenuItemClick"
             >
           </xm-pull-up-menu>
           </div>
         </div>
      </template>
       <!--</div>-->
    </xm-phone>
  </div>

</template>

<script>
export default {
  name: 'xm-fixed-menu',
  data () {
    return {}
  },
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handMenuClick (menus) {
      this.$emit('handMenuClick', menus)
    },
    handMenuItemClick (e) {
      this.$emit('handMenuItemClick', e)
    }
  }
}
</script>
