
<template>
  <div class="xm-chat">
    <slot name="header">
      <div class="xm-chat__title">{{title}}</div>
    </slot>
    <div class="xm-chat__container">
      <message v-for="message in messages"   v-bind="message" :key="messages.id"    @click.native="handleClick(message)"  ></message>
    </div>
  </div>

</template>

<script>
import message from './message.vue'
export default {
  name: 'xm-chat',
  data () {
    return {

    }
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    title: String
  },
  methods: {
    handleClick (item) {
      this.$emit('click', item)
    }
  },
  components: {
    message
  }
}
</script>
