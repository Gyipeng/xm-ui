<template>
  <div class="xm-fold xm-fold--default" v-if="type==='default'">
    <slot></slot>
    <div class="xm-fold__shadow" ref="shadow"></div>
  </div>
  <div class="xm-fold xm-fold--primary" ref="fold" v-else>
    <div class="xm-fold__item" v-for="(data, index) in dataList" :key="index"
         :style="{position:'absolute',left:`${width*(dataList.length>1?index:1)}px`,zIndex:dataList.length-index}">
      <slot name="fold" :data="data"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xm-fold',
    data() {
      return {
        height: '',
        width: 0
      }
    },
    props: {
      type: {
        type: String,
        default: "default"
      },
      dataList: {
        type: Array,
        default: () => []
      }
    },
    mounted() {
      if (this.type === "default") {
        this.isDefault()
      } else {
        this.getWidth()
      }

    },
    methods: {
      isDefault() {
        this.$nextTick(() => {
          this.height = this.$el.offsetHeight * 0.87
          let dom = this.$el.querySelector('.xm-fold__shadow')
          dom.style.height = this.height + 'px'
        })
      },
      getWidth() {
        this.$nextTick(() => {
          let {offsetWidth} = document.querySelector(".xm-fold--primary")
          let item = document.querySelector(".xm-fold__item")
          let length = this.dataList.length - 1
          length = length ? length : 2
          this.width = ((offsetWidth - item.offsetWidth) / length)
          return this.width
        })
      }
    },
    computed: {},
    watch: {
      width(val) {
        // console.log(val);
      }
    }
  }
</script>
