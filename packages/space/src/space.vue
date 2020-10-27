
<script type="text/jsx">
const spaceSize = {
  small: '8px',
  middle: '16px',
  large: '24px'
}
const prefix = 'xm-space'
export default {
  name: 'xm-space',
  render (h, context) {
    const items = this.$slots.default
    return (
      <div
        class={this.spaceCls}>
        {
          items && items.map((item, index) => <div class="xm-space-item" style={ this.isLeft(index) || this.styleConfig} >
            {item}
          </div>)
        }
      </div>
    )
  },
  props: {
    direction: {// 方向 vertical为垂直方向
      type: String,
      default: 'horizontal'
    },
    left: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => {}
    },
    size: {
      type: [Number, String],
      default: 'small'
    },
    className: {

    },
    align: {
      type: String,
      default: ''
    }

  },
  mounted () {
    // console.log(this.left);
  },
  computed: {
    spaceCls () {
      const direction = `${prefix}-${this.direction}`
      const left = `${prefix}-left`
      return {
        [prefix]: !!prefix,
        [direction]: !!direction,
        [left]: !!left,
        className: this.className
      }
    },
    styleConfig () {
      const marginDirection = this.left ? 'marginLeft' : 'marginRight'
      const direction = this.direction === 'vertical' ? 'marginBottom' : marginDirection
      const style = Object.assign({}, { [direction]: spaceSize[this.size] || this.size }, this.config)
      return style
    }
  },
  methods: {
    isLeft (index) {
      const items = this.$slots.default
      if (!this.left) return index === items.length - 1
      if (this.left) return index === 0
    }

  }
}
</script>

<style scoped lang="scss">
  @import '~@/mixins/mixins.scss';
  @include b(space){
    &-vertical{
      /*display: flex;*/
    }
    &-horizontal{
      display: inline-flex;
    }
    &-aligin{

    }
    &-item{

    }

  }
</style>
