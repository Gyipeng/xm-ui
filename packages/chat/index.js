
import Chat from './src/chat.vue'

Chat.install = function (Vue) {
  Vue.component(Chat.name, Chat)
}

export default Chat
