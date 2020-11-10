
<template>
  <div class="xm-chat">
    <div class="xm-chat__title">139****7777(用户1备注)</div>
    <div class="xm-chat__container">

      <message v-for="message in messages"   v-bind="message" :key="messages.id"  ></message>
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
    }
  },
  components: {
    message
  }
}
</script>
