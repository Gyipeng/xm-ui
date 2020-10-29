
<template>
  <div class="xm-button-more">
    <el-dropdown
      @command="menuClick"
      v-bind="$attrs"
      :trigger="trigger"
      :size="size"
    >
      <img v-if="src" :src="src"   alt="" />
      <div v-else>
        <slot></slot>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in menus"
          :key="item.name"
          :icon="item.icon"
          :command="item"
        >
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
import emitter from '../../../utils/emitter.js'
export default {
  name: 'xm-button-more',
  data () {
    return {}
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    src: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    size: {
      type: String,
      default: 'small'
    }

  },
  mixins: [emitter],
  methods: {
    menuClick (item) {
      item.action && item.action(item)

      if (this.isParent) {
        this.dispatch('parent', item.key)
      } else {
        this.$emit(item.key)
      }
    }
  },
  computed: {
    isParent () {
      let parent = this.$parent
      while (parent) {
        const parentComponentName = parent.$options.componentName
        const isGroup = parentComponentName === 'parent'
        if (isGroup) {
          return true
        } else {
          parent = parent.$parent
        }
      }
      return false
    }
  }
}
</script>
