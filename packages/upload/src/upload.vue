
<template>
  <div :class="cls">
      <div class="xm-upload__button" @click="checkedFile">
        <slot name="trigger">
          <el-button :disabled="loading!=0" v-if="firstUpload"  icon="el-icon-plus" size="small"  type="primary">本地上传</el-button>
        </slot>
        <slot>
        </slot>
      </div>
      <input type="file"  name="file" class="xm-upload__input"  v-show="false" ref="upload" @change="uploadFiles">
      <el-progress  v-if="loading" v-width="170"  :percentage="loading"></el-progress>
      <el-link v-if="!firstUpload" size="small" type="primary" @click="checkedFile">重新上传</el-link>

    <div>

    </div>

  </div>

</template>

<script>
const prefix = 'xm-upload'
const classnames = require('classnames')
export default {
  name: 'xm-upload',
  data () {
    return {
      loading: 0,
      firstUpload: true
    }
  },
  mounted () {
  },
  methods: {
    uploadFiles (ev) {
      const files = ev.target.files

      if (!files) return
      this.showPreview(files[0])
    },
    showPreview (file) {
      let that = this
      this.onStart && this.onStart(file)
      if (window.FileReader) {
        let fr = new FileReader()
        fr.onloadend = function (e) {
          that.onSuccess && that.onSuccess(e.target.result, file)
          that.firstUpload = false
          that.loading = 0
          that.$refs.upload.value = null
        }
        // 给FileReader对象一个读取完成的方法,使用readAsDataURL会返回一个url,这个值就保存在事件对象的result里,img通过加载这个地址,完成图片的加载
        fr.readAsDataURL(file)
        let total = file.size
        fr.onprogress = (ev) => {
          let val = (ev.loaded / total) * 100
          that.loading = parseInt(val, 10)
          that.onProgress && that.onProgress(val, file)
        }
      }
    },
    checkedFile () {
      this.$refs.upload.click()
    }
  },
  props: {
    accept: String,
    onProgress: Function,
    limit: Number,
    onStart: Function,
    onSuccess: Function,
    onError: Function
  },
  computed: {
    cls () {
      const cls = classnames(prefix, {
        [`${prefix}--bottom`]: !this.firstUpload
      })
      return cls
    }

  }
}
</script>
