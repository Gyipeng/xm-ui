
<template>
   <div class="xm-swiper swiper-no-swiping" @click="swiperClick($event)">
     <!--<div class="xm-swiper__totalBox">共<span class="xm-swiper__num">{{data.length}}</span>张</div>-->
     <swiper :options="swiperOption" ref="swiper">
       <swiper-slide  v-if="cardLength===1&&centeredSlides">
       </swiper-slide>
       <swiper-slide  v-for="(item, boxIndex) in data" :key="boxIndex">
         <slot   :item="getItme(item,boxIndex)"></slot>
       </swiper-slide>
       <swiper-slide v-if="this.$slots.button">
         <slot name="button"></slot>
       </swiper-slide>
     </swiper>
     <div class="swiper-pagination" slot="pagination" :class="{'xm-show':cardLength>=cardShowNumber}"></div>
     <div class="swiper-button-prev xm-swiper__button " slot="button-prev" :class="{'xm-show':cardLength>=cardShowNumber}">
       <i class="el-icon-arrow-left"></i>
     </div>
     <div class="swiper-button-next xm-swiper__button " slot="button-next" :class="{'xm-show':cardLength>=cardShowNumber}">
       <i class="el-icon-arrow-right"></i>
     </div>
   </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'xm-swiper',
  data () {
    return {
      swiperOption: {// 卡片轮播配置
        slidesPerView: this.cardShowNumber,
        spaceBetween: 0,
        slidesPerGroup: this.cardShowNumber,
        centerInsufficientSlides: true,
        // loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          prevEl: '.swiper-button-prev ',
          nextEl: '.swiper-button-next '
        },
        initialSlide: 1
        // centeredSlides: true,
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    cardShowNumber: {// 每页显示的卡片数量
      type: Number,
      default: 3
    },
    centeredSlides: {
      type: Boolean,
      default: false
    },
    showPage: {// 是否一直显示分页和左右箭头
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isShowArrow () { // 是否显示箭头
      const { swiper } = this
      // swiper.pagination.$el.removeClass('hide');
      swiper.el.onmouseover = function () {
        swiper.navigation.$nextEl.removeClass('hide')
        swiper.navigation.$prevEl.removeClass('hide')
      }
      swiper.el.onmouseout = function () {
        swiper.navigation.$nextEl.addClass('hide')
        // swiper.navigation.$prevEl.addClass('hide');
      }
    },
    getItme (item, index) {
      // item.index = index
      return item
    },
    swiperClick (e) { // 为了关闭编辑下拉列表
      // const targetName = e.target.className
      // if (!targetName.includes('el-dropdown-selfdefine')) { this.$root.vm.$emit('closeDropdownList') }
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper
    },
    cardLength () {
      return this.data.length
    },
  },
  watch: {
    cardLength (value) { // 轮播卡片个数进行滚动
      // console.log(value);
      this.$nextTick(() => {
        this.swiper.slideTo(100, 10, false)// 跳转至最后
      })
      if (value > this.cardShowNumber - 1) {
        this.isShowArrow()
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>
