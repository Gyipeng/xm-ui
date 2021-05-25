<template>
  <div class="xm-media-phone">
    <xm-phone>
      <div class="xm-media-phone__content" v-for="content  in templates" :key="content.id"
           @click="handleClick(content)">
        <expandComponent v-if="content.renderEl" :render="content.renderEl" v-bind="content"></expandComponent>
        <component v-else v-height="content.content.height" v-width="content.content.width" v-bind:is="content.type"
                   v-bind="content.content"></component>
      </div>
      <template slot="footer" >
        <slot name="footer"></slot>
      </template>

    </xm-phone>

  </div>
</template>

<script>
  import expandComponent from "./expandComponent"

  export default {
    name: "xm-media-phone",
    data() {
      return {}
    },
    methods: {
      handleClick(itme) {
        this.$emit("click", itme)
      }
    },
    props: {
      templates: {
        type: Array,
        default: () => []
      },

    },
    components: {
      expandComponent
    }
  }
</script>
