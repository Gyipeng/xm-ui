<script>
export default {
  functional: true,

  render: (h, ctx) => {
    // console.log(ctx.props.props);
    // console.log(ctx.props, ctx)
    return ctx.props.render(h, ctx.props)
  }
}
</script>
