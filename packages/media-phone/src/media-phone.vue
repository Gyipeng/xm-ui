<template>
  <div class="xm-media-phone">
    <xm-phone>
      <div class="xm-media-phone__content" v-for="content  in templates" :key="content.id" @click="handleClick(content)">
        <expandComponent v-if="content.renderEl" :render="content.renderEl" v-bind="content"></expandComponent>
        <component v-else v-height="content.content.height" v-width="content.content.width" v-bind:is="content.type"
                   v-bind="content.content"></component>

      </div>
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
        default: () => [
          {
            id: 3,
            renderEl: (h, params) => {
              params.style = {width: '224px', height: '144px'}
              params.attrs = {
                title: '123',
                src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              }
              return h('xm-img', params)
            },
          },
          {
            id: 4,
            type: 'xm-audio',
            content: {
              width: 224,
              height: 144,
              src: "http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3"
            },
          }
        ]
      },

    },
    components: {
      expandComponent
    }
  }
</script>
