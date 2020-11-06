
<template>
  <div class="xm-button-ellipsis"  >
      <span   :key="index"  v-for="(item,index) in buttonList" class="xm-button-ellipsis__button">
          <slot v-if="getComp"  :item="item" ></slot>
          <xm-tag v-else v-bind="$attrs">{{item.name}}</xm-tag>
      </span>
     <span v-if="count" :style="style" class="xm-button-ellipsis__number" >+{{count}}</span>
  </div>

</template>

<script>
export default {
  name: 'xm-button-ellipsis',
  data () {
    return {
      count: 0,
      buttonList: this.data
    }
  },
  props: {
    height: {
      type: [Number, String],
      default: 30
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.init()

  },
  methods: {
    init () {
      this.limitShow()
    },
    limitShow () {
      this.$nextTick(() => {
        let buttons = this.$el.querySelector('.xm-button-ellipsis__button')
        let height = this.height
        let ellipsis = this.$el
        let n = 999
        if (buttons) {
          if (ellipsis.offsetHeight > height) {
            let arr = this.buttonList

            if (ellipsis.offsetHeight > height && n > 0) {
              if (ellipsis.offsetHeight > height * 3) {
                this.buttonList = arr = arr.slice(0, Math.floor(arr.length / 2))
              } else {
                this.buttonList = arr = arr.slice(0, arr.length - 1)
              }
              // n--
            }
          } else {
            // more.style.display = 'none'
          }
        }
      })
    },
  },
  computed: {
    style () {
      return {height: `${this.height}px`, lineHeight: `${this.height}px`}
    },
    getComp () {
      return this.$scopedSlots.default
    }

  },
  watch: {
    buttonList () {
      this.count = this.data.length - this.buttonList.length
      this.init()
    }
  }
}
</script>
