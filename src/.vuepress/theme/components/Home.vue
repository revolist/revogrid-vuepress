<template>
<div class="theme-body">
  <section class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7 pt-5 mb-5 align-self-center">
          <div class="custom-block danger">
            <p class="custom-block-title">New version is released.</p>
            <p><a href="https://rv-grid.com">Please use official docs</a></p>
          </div>
          <div class="promo p-md-3 p-lg-5">
            <h1 class="headline mt-1 mb-3 me-2">
              Hello,<br>
              I am RevoGrid – the sheet<br>
              you will <a>love.</a>
            </h1><!--//headline-->
            <div class="subheadline mb-4">
              {{ data.tagline || $description || 'Welcome to RevoGrid' }}
            </div><!--//subheading-->
            
            <div class="cta-holder">
              <a class="btn btn-primary me-lg-2" href="demo/">Demo</a>
              <a class="btn btn-secondary scrollto" href="guide/">Docs</a>
            </div><!--//cta-holder-->
            
            <div class="hero-quotes mt-5">
              <blockquote class="quote p-4 theme-bg-light text-muted">
                <small>I am support all famous framewors and much more</small>
              </blockquote><!--//item-->
              <div class="source media flex-column flex-md-row align-items-center">
                <a v-for="framework in $site.themeConfig.frameworks" :href="framework.url">
                  <img :src="$withBase(framework.img)" :alt="framework.title || ''" />
                </a>
              </div><!--//source-->
            </div><!--//hero-quotes-->
          </div><!--//promo-->
        </div><!--col-->
        <div class="col-12 col-md-5 mb-5 align-self-stretch">
          <div class="grid-panel-present mb-3">
            <div class="row ps-2 pb-3 pt-3 header-buttons">
              <github-button class="col-4" href="https://github.com/revolist/revogrid" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Star revolist/revogrid on GitHub">Star me</github-button>
            </div>
            <demo-initial/>
          </div>
        </div><!--col-->
      </div><!--//row-->
    </div><!--//container-->
  </section><!--//hero-section-->
  
  <section id="benefits-section" class="benefits-section theme-bg-light-gradient py-5">
    <div class="container py-5">
      <h2 class="section-heading text-center mb-3">Best things you can get from RevoGrid</h2>
      <div class="section-intro single-col-max mx-auto text-center mb-5">We are improving grid all the time. If you wish to get more information consider to visit our <a target="_blank" href="https://github.com/revolist/revogrid/projects/1">roadmap</a>.</div>
      <div class="row text-center"  v-if="data.features && data.features.length">
        <div v-for="(feature, index) in data.features" :key="index"
               class="item col-12 col-md-6 col-lg-4">
          <div class="item-inner p-3 p-lg-4">
            <div class="item-header mb-3">
              <div class="item-icon">
                <img :src="$withBase(feature.icon)"/></div>
              <h3 class="item-heading">{{ feature.title }}</h3>
            </div><!--//item-heading-->
            <div class="item-desc">
              {{ feature.details }}
            </div><!--//item-desc-->
          </div><!--//item-inner-->
        </div><!--//item-->
      </div><!--//row-->
    </div><!--//container-->
  </section><!--//benefits-section-->
  
  <footer class="footer" v-if="data.footer">
    <div class="footer-bottom text-center py-5" v-html="data.footer"></div>
  </footer>
</div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';
import GithubButton from 'vue-github-button';

export default {
  name: 'Home',

  components: { NavLink, GithubButton },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap-grid.scss";
@import "~bootstrap/scss/bootstrap-utilities.scss";
@import "~bootstrap/scss/buttons";
@import '../styles/home/theme.scss';
</style>
