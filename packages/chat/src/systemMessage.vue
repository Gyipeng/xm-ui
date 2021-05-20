
<template>
  <div class="SystemMessage">
    <xm-template v-width="322"
                 v-bind="$attrs"
                 :footer="false"
    >
      <xm-fold v-width="207"  v-if="type==='card'">
        <xm-card v-width="196" v-bind="$attrs" ></xm-card>
      </xm-fold>
      <xm-media v-else v-width="224" v-height="144" v-bind="$attrs"></xm-media>
    </xm-template>

  </div>

</template>

<script>
export default {
  name: 'systemMessage',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    type: String

  }
}
</script>
