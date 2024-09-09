<template>
  <div id="global-layout">
    <div class="custom-block danger" style="margin: 0; padding: 8px 5px">New version 4+ is released. <a href="https://rv-grid.com" style="color: #cf0000;">Please use official docs</a></div>
    <component :is="layout"/>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>
<style lang="stylus">
@import '../styles/themeExt.styl';
@import '../styles/tile.styl';
@import '../styles/bubble.styl';
@import '../styles/grid.styl';
</style>