<template>
  <button
    @click="$emit('click')"
    class="xm-button"
    :disabled="disabled"
    :class="[
    'xm-button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'xm-button--'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default{
  name: 'xmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  data () {
    return {
      msg: 'button'
    }
  }
}
</script>
