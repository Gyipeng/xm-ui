import Video from './src/video.vue'

Video.install = function (Vue) {
  Vue.component(Video.name, Video)
}

export default Video
