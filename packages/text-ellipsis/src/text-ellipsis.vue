<template>
  <div class="xm-text-ellipsis">
    <slot name="before" class="xm-text-ellipsis__before"></slot>
    <span :style="textStyle" :class="textClass" @click="textClick"  ></span>
    <span  class="xm-text-ellipsis__limit-text" :key="keyIndex">{{text}}</span>
    <span class="xm-text-ellipsis__more"  v-show='oversize' @click="textClick" >{{more}}<slot name="more"></slot></span>
    <slot name="after" class="xm-text-ellipsis__after"></slot>
  </div>

</template>

<script>
export default {
  name: 'xmTextEllipsis',
  data () {
    return {
      oversize: false, // 是否超过宽度
      keyIndex: 0, // 序号
      isHide: false, // 以后做是否显示提示语
      offsetHeight: 0
    }
  },
  props: {
    text: String, // 文本内容
    height: {
      type: [Number, String],
      default: 0
    }, // 文本高度
    textStyle: [String, Object, Array],
    textClass: [String, Object, Array],
    more: String, // 更多
    isLimitHeight: {// 是否限制高度
      type: Boolean,
      default: true
    },
    row: {
      type: [String, Number],
      default: 1
    },
    isOver: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    textClick () {
      this.$emit('moreClick')
    },
    init () {
      this.oversize = false
      this.keyIndex += 1
      let more = this.$el.querySelector('.xm-text-ellipsis__more')
      more.style.display = 'inline-block'
      if (this.isLimitHeight) {
        this.limitShow()
      }
    },
    limitShow () {
      this.$nextTick(() => {
        let textDom = this.$el.querySelector('.xm-text-ellipsis__limit-text')
        let title = this.$el
        let more = this.$el.querySelector('.xm-text-ellipsis__more')
        this.offsetHeight = more.offsetHeight
        let height = this.height || this.row * this.offsetHeight
        // this.isOvers(textDom)
        let n = 999
        if (textDom) {
          if (title.offsetHeight > height) {
            // more.style.display = 'inline-block';
            let text = this.text
            while (title.offsetHeight > height && n > 0) {
              // console.log(title,title.offsetHeight);
              if (title.offsetHeight > height * 3) {
                textDom.innerText = text = text.substring(0, Math.floor(text.length / 2))
                // console.log(text);
              } else {
                textDom.innerText = text = text.substring(0, text.length - 1)
              }
              n--
            }

            this.$emit('hide')
            this.isHide = true
          } else {
            more.style.display = 'none'
            this.$emit('show')
            this.isHide = false
          }
        }
      })
    },
    isOvers (textDom) {
      if (this.text !== '/') {
        let height = this.height || this.row * this.offsetHeight
        if (textDom.offsetHeight < height) {
          this.$emit('update:isOver', false)
        }
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    isLimitHeight () {
      this.init()
    },
    text () {
      this.init()
    },
    height () {
      this.init()
    }

  }
}
</script>
