
<template>
    <div class="xm-phone">
      <div class="xm-phone__content">
        <slot></slot>
      </div>
      <div class="xm-phone__footer">
        <slot name="footer"></slot>
      </div>

    </div>
</template>

<script>
export default {
  name: 'xmPhone',
  data () {
    return {

    }
  }
}
</script>
