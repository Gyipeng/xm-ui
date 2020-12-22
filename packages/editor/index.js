
import Editor from './src/editor.vue';

Editor.install = function (Vue) {
  Vue.component(Editor.name, Editor);
};

export default Editor;
