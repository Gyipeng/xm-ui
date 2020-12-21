
<template>
  <div class="xm-button-ellipsis"   >
      <span   :key="index"  v-for="(item,index) in buttonList" class="xm-button-ellipsis__button">
          <slot v-if="getComp"  :item="item" ></slot>
          <xm-tag v-else v-bind="$attrs" round  type="plain" >{{item.name}}</xm-tag>
      </span>
     <slot  name="number" v-if="count"  :number="'+'+count" class="xm-button-ellipsis__number" >
       <xm-tag v-bind="$attrs"  round  type="plain">+{{count}}</xm-tag>
     </slot>
  </div>

</template>

<script>
export default {
  name: 'xm-button-ellipsis',
  data () {
    return {
      total: this.data.length,
      buttonList: this.data,
      count: 0
    }
  },
  props: {
    height: {
      type: [Number, String],
      default: 32
    },
    data: {
      type: Array,
      default: () => []
    },

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
                // this.buttonList.splice(Math.floor(arr.length / 2), Math.floor(arr.length / 2))

                this.buttonList = this.buttonList.slice(0, Math.floor(this.buttonList.length / 2))
              } else {
                // this.buttonList.splice(arr.length - 1, 1)

                this.buttonList = this.buttonList.slice(0, this.buttonList.length - 1)
              }
              // n--
            }
          } else {
            // more.style.display = 'none'
          }
        }
      })
    }
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
      this.count = this.total - this.buttonList.length
      this.limitShow()
    }
  }
}
</script>
