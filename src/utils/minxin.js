export const mixin = {

  directives: {
    focus: {
      // 指令的定义
      inserted (el, binding, vnode) {
        el.focus()
      },
      update (el, { value }) {
      }
    },
    autofocus: {
      // 指令的定义
      inserted (el, binding, vnode) {
        const input = el.querySelector('input')
        input.focus()
      }
    },
    tooltip: {
      bind (el, binding, vnode) {
        // el.style.position = 'relative';
        const tip = document.createElement('span')
        el.addEventListener('mouseover', (e) => {
          tip.style.display = 'block'
          setPosition(tip, e, el)
        })
        el.addEventListener('mouseout', () => {
          tip.style.display = 'none'
        })
        tip.className = 'xm-tooltip'
        const css = {
          position: 'absolute',
          padding: '8px',
          fontSize: '12px',
          color: 'rgba(53,55,56,1)',
          background: 'rgba(247,249,252,1)',
          border: '1px solid rgba(200,202,204,1)',
          borderRadius: '0px 4px 4px 4px',
          lineHeight: 1,
          boxShadow: '0px 2px 4px 0px rgba(0,45,84,0.12)',
          zIndex: 99999,
          display: 'none'
        }

        // const pos = setPosition(tip,vnode,el);
        tip.textContent = binding.value
        // for (const item in pos) {
        //   css[item] = pos[item];
        // }
        setCss(tip, css)

        function setPosition (tip, e) {
          // console.log(el.getBoundingClientRect(), e);
          const { bottom } = el.getBoundingClientRect()
          tip.style.top = `${bottom}px`
          tip.style.left = `${e.x}px`
        }
        // 给元素赋值样式ƒ
        function setCss (obj, css) {
          for (const attr in css) {
            obj.style[attr] = css[attr]
          }
        }
        document.body.appendChild(tip)
      }

    },
    title: {
      // 溢出隐藏 并增加鼠标提示
      bind (el, binding, vnode) {
        const title = document.createElement('span')
        title.style.display = 'inline-block'
        title.textContent = binding.value
        // 设置id方便寻找
        title.setAttribute('id', 'mbmp-title')
        document.body.appendChild(title)
        const css = {
          position: 'absolute',
          padding: '8px',
          fontSize: '12px',
          color: 'rgba(53,55,56,1)',
          background: 'rgba(247,249,252,1)',
          border: '1px solid rgba(200,202,204,1)',
          borderRadius: '0px 4px 4px 4px',
          lineHeight: 1,
          boxShadow: '0px 2px 4px 0px rgba(0,45,84,0.12)',
          zIndex: 99999,
          display: 'none'
        }
        function setCss (target, cssObj) {
          for (const key in cssObj) {
            target.style[key] = cssObj[key]
          }
        }
        function setPosition (target, e) {
          // el.getBoundingClientRect()返回的是一个rect对象
          // rect 是一个具有四个属性 left、top、right、bottom 的 DOMRect 对象
          // console.log(el.getBoundingClientRect(), e);
          const { bottom } = el.getBoundingClientRect()
          target.style.top = `${bottom}px`
          target.style.left = `${e.x}px`
        }
        setCss(title, css)
        el.addEventListener('mouseenter', (e) => {
          title.style.display = 'block'
          // 异步处理，
          setPosition(title, e)
          // 如果title.offsetWidth > el.offsetWidth表示溢出
          // console.log(title.offsetWidth, title.clientWidth, el.offsetWidth, el.scrollWidth)
          if (title.offsetWidth < el.offsetWidth) {
            title.style.display = 'none'
          }
        })
        el.addEventListener('mouseout', () => {
          title.style.display = 'none'
        })
      },
      // 指令与元素解绑时
      unbind () {
        const vcTooltipDom = document.getElementById('mbmp-title')
        vcTooltipDom && document.body.removeChild(vcTooltipDom)
      }
    },
    clickoutside: {
      bind (el, binding) {
        function documentHandler (e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        el.ClickOutside = documentHandler
        document.addEventListener('click', documentHandler)
      },
      unbind (el) {
        document.removeEventListener('click', el.ClickOutside)
        // 如果不移除，当组件或元素销毁时，它仍存在于内存中
        delete el.ClickOutside
      }

    }

  }

}
