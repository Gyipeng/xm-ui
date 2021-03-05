
<template>
  <div :class="cls" >
    <div class="Message-content" >
      <el-avatar class="Avatar" shape="circle"  size="small" v-if="user&&user.avatar"   :src="user.avatar" ></el-avatar>
      <expandComponent v-if="renderEl" :render="renderEl" v-bind="content"   ></expandComponent>
      <bubble v-else-if="type==='text'" :content="content.text"></bubble>
      <systemMessage v-else-if="type==='system'" v-bind="content" ></systemMessage>
      <component v-height="content.height" v-width="content.width" class="Bubble " v-else v-bind:is="type" v-bind="content" ></component>
    </div>
    <div class="Message-key" v-if="keyData">
      <el-tooltip class="item" effect="light" :content="keyData" placement="bottom-start" popper-class="xm-tooltip" :visible-arrow="false">
      <div class="key Ellipsis" >
        关键词:{{keyData}}
      </div>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="终端不展示关键词" placement="right" popper-class="xm-tooltip" >
        <img  class="icon" src="../../../assets/img/point.png" alt="">
      </el-tooltip>
    </div>
    <div  class="Message-meta">
      {{time}}
    </div>
  </div>
</template>

<script>
import bubble from './bubble.vue'
import systemMessage from './systemMessage.vue'
import expandComponent from './expandComponent.vue'
const classnames = require('classnames')
export default {
  name: 'message',
  data () {
    return {}
  },
  props: {
    time: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    user: Object,
    content: Object,
    position: {
      type: String,
      default: 'left'
    },
    renderEl: Function,
    keyData: String
  },
  computed: {
    cls () {
      const className = classnames('Message', {
        [`xm-${this.position}`]: true
      })
      return className
    }
  },
  components: {
    bubble, systemMessage, expandComponent
  }
}
</script>
