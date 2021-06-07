
<template>
  <div :class="cls">
    <!--输入链接-->
    <el-popover ref="popover-link" v-model="link.show" @show="showLink" placement="bottom" width="200" trigger="click">
      <div class="link-wrap">
        <div class="link-item">
          <input class="input" v-model="link.text"/>
        </div>
        <div class="link-item" style="margin-top:10px;">
          <input class="input" ref="url" @input="urlInput" placeholder="链接地址"/>
        </div>
        <div class="link-item" style="margin-top:10px;">
          <button :disabled="!link.isUrl" class="button button-primary button-min" @click="insertLink">确认</button>
          <button class="button button-min" @click="link.show = false">取消</button>
        </div>
      </div>
    </el-popover>
    <!--上传图片-->
    <el-popover ref="popover-img" v-model="img.show" @show="showImg" placement="bottom" width="200" trigger="click">
      <div class="img-wrap">
        <div class="img-item" v-show="!img.isLink">
          <div class="btn-upload">
            <span>上传图片</span>
            <input ref="imgfile" type="file" accept="image/png,image/jpg,image/jpeg" @change="changeFile">
          </div>
        </div>
        <div class="img-item" v-show="!img.isLink" style="margin-top:10px;">
          <button class="button button-full" @click="img.isLink = true">网络图片</button>
        </div>
        <div class="img-item" v-show="img.isLink">
          <input @input="imgLinkInput" class="input" ref="img" placeholder="图片地址"/>
        </div>
        <div class="img-item" v-show="img.isLink" style="margin-top:10px;">
          <button :disabled="!img.isImgLink" class="button button-primary button-min" @click="insertImg">确认</button>
          <button class="button button-min" @click="img.isLink = false">取消</button>
        </div>
      </div>
    </el-popover>
    <div class="top">
      <div class="left">
        <div class="tools">
          <div class="tools-group">
            <el-tooltip class="item" effect="dark" content="标题和正文" placement="bottom">
              <button @click="headingClick" type="button" class="tool-btn"><i class="icon-login-Uers"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="粗体" placement="bottom">
              <button @click="fontClick('bold')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="斜体" placement="bottom">
              <button @click="fontClick('italic')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="下划线" placement="bottom">
              <button @click="fontClick('underline')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除线" placement="bottom">
              <button @click="fontClick('strikethrough')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
          </div>
          <div class="tools-group">
            <el-tooltip class="item" effect="dark" content="插入链接" placement="bottom">
              <button v-popover:popover-link type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="取消链接" placement="bottom">
              <button @click="unLinkClick" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="插入图片" placement="bottom">
              <button v-popover:popover-img  type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="插入引用" placement="bottom">
              <button  @click="quoteClick" type="button" class="tool-btn"><i class="fa  icon-login-Uers
"></i></button>
            </el-tooltip>
            <!-- <button type="button" class="tool-btn"><i class="fa  fa-table"></i></button> -->
          </div>
          <div class="tools-group">
            <el-tooltip class="item" effect="dark" content="左对齐" placement="bottom">
              <button  @click="alignClick('justifyLeft')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="居中对齐" placement="bottom">
              <button  @click="alignClick('justifyCenter')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="右对齐" placement="bottom">
              <button  @click="alignClick('justifyRight')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="两端对齐" placement="bottom">
              <button  @click="alignClick('justifyFull')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
          </div>
          <div class="tools-group">
            <!-- <button type="button" class="tool-btn"><i class="fa fa-list-ol"></i></button>
            <button type="button" class="tool-btn"><i class="fa fa-list-ul"></i></button> -->
            <el-tooltip class="item" effect="dark" content="文本缩进" placement="bottom">
              <button @click="dentClick('indent')"  type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="取消缩进" placement="bottom">
              <button @click="dentClick('outdent')" type="button" class="tool-btn"><i class="fa icon-login-Uers
"></i></button>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="editor"
           ref="editor"
           @blur="blurEditor"
           @keyup="keyup"
           @keyup.enter="enter"
           @keyup.delete="del"
           @input="change"
           @paste="paste"
           @focus="focus"
           @mouseup="mouseup"
           contenteditable="true">
        <p><span><br></span></p>
      </div>
    </div>

  </div>
</template>

<script>
const classnames = require('classnames')
const prefix = 'xm-editor'
export default {
  name: prefix,
  data () {
    return {
      range: null,
      content: '<p><span><br></span></p>',
      link: {
        text: '链接',
        url: '',
        isUrl: false,
        show: false
      },
      img: {
        show: false,
        isLink: false,
        isImgLink: false
      }

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.editor.focus()
    })
  },
  methods: {
    focus () {
      this.range = window.getSelection().rangeCount && window.getSelection().getRangeAt(0)
      // console.log(this.range);
    },
    mouseup () {
      this.range = window.getSelection().getRangeAt(0)
    },
    keyup (e) {
      this.range = window.getSelection().getRangeAt(0)
      if (e.keyCode === 186) {
        this.checkedNumber(e)
      }
    },
    // 检查手机号码事件
    checkedNumber (e) {
      document.execCommand('insertHTML', false, '<span>测试</span>')
      // let node = this.range.commonAncestorContainer
      // node = node.parentNode
      // node.innerHTML = node.innerText
      // console.log(node, 123)
    },
    del (e) {
      // console.log(e)
      let node = this.range.commonAncestorContainer
      console.log(node,this.range)
      if (!node.data.includes(';')) {
        this.range.commonAncestorContainer = ''
      }
      console.log(node)
    },
    // input事件
    change () {
      let html = this.$refs.editor.innerHTML

      if (html == '') {
        this.$refs.editor.innerHTML = '<p><span><br></span></p>'
      }

      this.content = html
      this.range = window.getSelection().getRangeAt(0)
    },
    // enter键
    enter (e) {
      document.execCommand('formatBlock', false, 'P')
      let node = this.range.commonAncestorContainer

      if (node.className == 'editor') {
        return false
      }
      while (node.tagName != 'P') {
        node = node.parentNode
      }

      // 清除stye样式
      node.removeAttribute('style')
      node.removeAttribute('class')
      if (node.children[0] && node.children[0].tagName == 'B') {
        node.innerHTML = node.innerText
      }
      if (node.children[0] && node.children[0].tagName == 'I') {
        node.innerHTML = node.innerText
      }
      if (node.children[0] && node.children[0].tagName == 'U') {
        node.innerHTML = node.innerText
      }
      if (node.children[0] && node.children[0].tagName == 'STRIKE') {
        node.innerHTML = node.innerText
      }
    },
    // 显示插入链接
    showLink () {
      if (this.range) {
        this.link.text = this.range.toString() || '链接'
        if (this.range.commonAncestorContainer.parentNode.href) {
          this.link.href = ''
          this.$refs.url.value = ''
          this.link.isUrl = false
          if (!this.range.collapsed) {
            this.link.href = this.range.commonAncestorContainer.parentNode.href
            this.$refs.url.value = this.link.href
            this.link.isUrl = true
          }
        } else {
          this.link.href = ''
          this.$refs.url.value = ''
          this.link.isUrl = false
        }
      }
    },
    // 检查链接地址
    urlInput (e) {
      this.link.isUrl = /^http(s)?:\/\/(.*)?$/.test(e.target.value)
    },
    // 点击插入链接
    insertLink () {
      if (this.range) {
        this.link.url = this.$refs.url.value
        if (!/^http(s)?:\/\/(.*)?$/.test(this.link.url)) {
          this.$message.error('请输入链接')
          return false
        }
        let newNode = document.createElement('a')
        newNode.setAttribute('href', this.link.url)
        newNode.appendChild(document.createTextNode(this.link.text))
        this.range.deleteContents()
        this.range.insertNode(newNode)
        this.link.show = false
      } else {
        return false
      }
    },
    // 取消链接
    unLinkClick () {
      document.execCommand('unlink', false, null)
    },
    // 显示插入图片
    showImg () {
      this.img.isLink = false
      this.$refs.img.value = ''
      this.img.isImgLink = false
    },
    // 验证图片地址
    imgLinkInput (e) {
      this.img.isImgLink = /^http(s)?:\/\/(.*)?$/.test(e.target.value)
    },
    // 插入网络图片
    insertImg () {
      if (this.range) {
        let node = this.range.commonAncestorContainer
        if (node.className == 'editor') {
          return false
        }
        while (node.parentNode.className != 'editor') {
          node = node.parentNode
        }
        if (node.tagName == 'H1') {
          this.$message.error('标题不支持插入图片')
          return false
        }
        if (node.tagName == 'BLOCKQUOTE') {
          this.$message.error('引用不支持插入图片')
          return false
        }
        let imgUrl = this.$refs.img.value
        if (!/^http(s)?:\/\/(.*)$/.test(imgUrl)) {
          this.$message.error('请图片链接')
          return false
        }
        let newNode = document.createElement('img')
        newNode.setAttribute('src', imgUrl)
        this.range.deleteContents()
        this.range.insertNode(newNode)
        this.img.show = false
      }
    },
    // 上传图片
    changeFile (e) {
      this.$refs.imgfile.value = ''
      if (this.range) {
        let node = this.range.commonAncestorContainer
        if (node.className == 'editor') {
          return false
        }
        while (node.parentNode.className != 'editor') {
          node = node.parentNode
        }
        if (node.tagName == 'H1') {
          this.$message.error('标题不支持插入图片')
          return false
        }
        if (node.tagName == 'BLOCKQUOTE') {
          this.$message.error('引用不支持插入图片')
          return false
        }
        let src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        let newNode = document.createElement('img')
        newNode.setAttribute('src', src)
        this.range.deleteContents()
        this.range.insertNode(newNode)
        this.img.show = false
      } else {
        return false
      }
    },
    // 点击标题
    headingClick () {
      let formatBlock = document.queryCommandValue('formatBlock')
      if (formatBlock == 'h1') {
        document.execCommand('formatBlock', false, 'P')
      }
      if (formatBlock == 'p') {
        document.execCommand('formatBlock', false, 'H1')
      }
    },
    // 引用
    quoteClick () {
      let formatBlock = document.queryCommandValue('formatBlock')
      if (formatBlock == 'blockquote') {
        document.execCommand('formatBlock', false, 'P')
      }
      if (formatBlock == 'p') {
        document.execCommand('formatBlock', false, 'BLOCKQUOTE')
      }
    },
    // 字样式
    fontClick (fontStyle) {
      document.execCommand(fontStyle, false, null)
    },
    // 点击按钮
    alignClick (align) {
      document.execCommand(align, false, null)
    },
    dentClick (dent) {
      let node = this.range.commonAncestorContainer
      if (node.className == 'editor') {
        return false
      }
      while (node.tagName != 'P') {
        node = node.parentNode
      }
      if (dent == 'indent') {
        node.setAttribute('class', dent)
      } else {
        // 清除stye样式
        node.removeAttribute('class')
      }
    },
    // 失去焦点保存rang
    blurEditor () {
      this.range = window.getSelection().getRangeAt(0)
    },
    // 粘贴事件
    paste (e) {
      e.preventDefault()
      e.stopPropagation()
      let clipboardData = e.clipboardData || window.clipboardData
      let pasteHtml = clipboardData.getData('text/html')
      let pasteText = clipboardData.getData('text/plain')
      // 过滤无用标签
      pasteHtml = pasteHtml.replace(/\n|\r/g, '') // 过滤换行
      pasteHtml = pasteHtml.replace(/<meta.+?>/g, '')
      pasteHtml = pasteHtml.replace(/<script.+?>.+?<\/script>/g, '')
      pasteHtml = pasteHtml.replace(/<style.+?>.+?<\/style>/g, '')
      pasteHtml = pasteHtml.replace(/<link.+?>/g, '')
      pasteHtml = pasteHtml.replace(/class=".+?"/g, '')
      pasteHtml = pasteHtml.replace(/style=".+?"/g, '')
      pasteHtml = pasteHtml.replace(/data-.+?".+?"/g, '')
      pasteHtml = pasteHtml.replace(/<input.+?>/g, '')// 过滤input
      pasteHtml = pasteHtml.replace(/<div.+?>/g, '<p>') // div
      pasteHtml = pasteHtml.replace(/<\/div>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<h[2|3|4|5|6].+?>/g, '<p>')// h
      pasteHtml = pasteHtml.replace(/<\/h[2|3|4|5|6]>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<ul.+?>/g, '<p>') // ul
      pasteHtml = pasteHtml.replace(/<\/ul>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<ol.+?>/g, '<p>') // ol
      pasteHtml = pasteHtml.replace(/<\/ol>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<li.+?>/g, '<p>') // li
      pasteHtml = pasteHtml.replace(/<\/li>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<dl.+?>/g, '<p>') // dl
      pasteHtml = pasteHtml.replace(/<\/dl>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<dt.+?>/g, '') // dt
      pasteHtml = pasteHtml.replace(/<\/dt>/g, '')
      pasteHtml = pasteHtml.replace(/<dd.+?>/g, '') // dd
      pasteHtml = pasteHtml.replace(/<\/dd>/g, '')
      pasteHtml = pasteHtml.replace(/<table.+?>/g, '<p>') // table
      pasteHtml = pasteHtml.replace(/<\/table>/g, '</p>')
      pasteHtml = pasteHtml.replace(/<thead.+?>/g, '') // table
      pasteHtml = pasteHtml.replace(/<\/thead>/g, '')
      pasteHtml = pasteHtml.replace(/<tbody.+?>/g, '') // tbody
      pasteHtml = pasteHtml.replace(/<\/tbody>/g, '')
      pasteHtml = pasteHtml.replace(/<tr.+?>/g, '') // tr
      pasteHtml = pasteHtml.replace(/<\/tr>/g, '')
      pasteHtml = pasteHtml.replace(/<td.+?>/g, '') // tr
      pasteHtml = pasteHtml.replace(/<\/td>/g, '')
      pasteHtml = pasteHtml.replace(/<button.+?>/g, '') // button
      pasteHtml = pasteHtml.replace(/<\/button>/g, '')
      pasteHtml = pasteHtml.replace(/<svg.*?>.*?<\/svg>/g, '')
      console.log(pasteHtml)
      document.execCommand('insertHTML', false, pasteHtml)
    }
  },
  computed: {
    cls () {
      const className = classnames(`${prefix}`)
      return className
    }
  }
}
</script>
<style>
  .editor > p{
    margin: 15px 0;
    font-size: 16px;
    line-height: 24px;
  }
  .editor > .indent{
    text-indent: 2em;
  }
  .editor > h1{
    margin: 15px 0;
    font-size: 26px;
    font-weight: normal;
    line-height: 32px;
  }
  .editor > blockquote{
    margin: 15px 0;
    padding: 10px;
    background: #EEE;
    font-size: 16px;
    line-height: 24px;
    border-left:3px solid #CCC;
  }
  .editor img{
    vertical-align: top;
    max-width: 100%;
  }
  .editor a{
    color: #25b864;
  }
  .link-wrap > .link-item > .input{
    width: 200px;
    height: 30px;
    padding: 0 10px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #CCC;
  }
  .img-wrap > .img-item > .input{
    width: 200px;
    height: 30px;
    padding: 0 10px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #CCC;
  }
  .img-wrap > .img-item > .btn-upload{
    width: 100%;
    height: 40px;
    background: #25b864;
    position: relative;
    overflow: hidden;
    text-align: center;
    line-height: 40px;
    color: #FFF;
    border-radius:2px;
  }
  .btn-upload > input{
    position: absolute;
    left: 0;
    top: 0;
    font-size: 200px;
    cursor: pointer;
    opacity: 0;
    z-index: 1;
  }
</style>
<style lang="less" scoped>
  .page-main{
    background: #fafafa;
    padding-top:60px;
    padding-bottom:40px;
    >.top{
      position: fixed;
      top: 0;
      display: flex;
      width: 100%;
      height: 60px;
      overflow: hidden;
      padding: 10px;
      box-sizing: border-box;
      border-bottom:1px solid #E6E6E6;
      background: #FFF;
      .left{
        flex: 1;
        padding-left: 50px;
        .tools{
          height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          >.tools-group{
            display: inline-block;
            padding: 0 20px;
            &+.tools-group{
              border-left:1px solid #E6E6E6;
            }
            >.tool-btn{
              height: 40px;
              min-width: 40px;
              padding:0 10px;
              border-radius:2px;
              cursor: pointer;
              background: #FFF;
              transition: background .3s;
              &:hover{
                background: #EEE;
              }
            }
            .tool-btn[disabled]{
              opacity: .5;
            }
          }
        }
      }
    }
    >.content{
      margin:20px auto 0;
      width: 100%;
      max-width: 1000px;
      height: auto;
      box-sizing: border-box;
      background: #FFF;
      box-shadow: 0 1px 2px rgba(0,0,0,.2);
      .title{
        padding: 40px;
        border-bottom:1px solid #E6E6E6;
        input{
          width: 100%;
          height: 40px;
          border: none;
          outline: none;
          font-size: 36px;
          font-weight: bold;
        }
      }
      .editor{
        padding: 40px;
        width: 100%;
        box-sizing: border-box;
        height: auto;
        min-height: calc(100vh - 200px);
        outline: none;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
  }
</style>
<style lang="less" scoped>
  .xm-editor{
    background: #fafafa;
    padding-top:60px;
    padding-bottom:40px;
    >.top{
      /*position: fixed;*/
      /*top: 0;*/
      /*display: flex;*/
      /*width: 100%;*/
      /*height: 60px;*/
      /*overflow: hidden;*/
      /*padding: 10px;*/
      /*box-sizing: border-box;*/
      /*border-bottom:1px solid #E6E6E6;*/
      /*background: #FFF;*/
      .left{
        flex: 1;
        padding-left: 50px;
        .tools{
          height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          >.tools-group{
            display: inline-block;
            padding: 0 20px;
            &+.tools-group{
              border-left:1px solid #E6E6E6;
            }
            >.tool-btn{
              height: 40px;
              min-width: 40px;
              padding:0 10px;
              border-radius:2px;
              cursor: pointer;
              background: #FFF;
              transition: background .3s;
              &:hover{
                background: #EEE;
              }
            }
            .tool-btn[disabled]{
              opacity: .5;
            }
          }
        }
      }
    }
    >.content{
      margin:20px auto 0;
      width: 100%;
      max-width: 1000px;
      height: auto;
      box-sizing: border-box;
      background: #FFF;
      box-shadow: 0 1px 2px rgba(0,0,0,.2);
      .title{
        padding: 40px;
        border-bottom:1px solid #E6E6E6;
        input{
          width: 100%;
          height: 40px;
          border: none;
          outline: none;
          font-size: 36px;
          font-weight: bold;
        }
      }
      .editor{
        padding: 40px;
        width: 100%;
        box-sizing: border-box;
        height: auto;
        min-height: calc(100vh - 200px);
        outline: none;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
  }
</style>
