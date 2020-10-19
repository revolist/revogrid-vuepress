
<script>
import Vue from 'vue';
Vue.config.ignoredElements = [/revo-\w*/]; // Set ignore web-component and avoid parsing it as vuejs
const props = ['canFocus', 'colSize', 'columns', 'editors', 'frameSize', 'pinnedBottomSource', 'pinnedTopSource', 'range',
    'readonly', 'refresh', 'resize', 'rowClass', 'rowSize', 'source', 'theme'];


export default {
    name: 'data-grid',
    props,
    data() {
        return {
            asc: true
        };
    },
    watch: props.reduce((res, p) => {
        res[p] = function(newVal, oldVal) {
          this.$refs.grid[p] = newVal;
        };
        return res;
      }, {}
    ),
    render(createElement) {
        return createElement(
            'revo-grid',
            {
              ref: 'grid',
              domProps: this.$props
            },
        );
    },
}
</script>
