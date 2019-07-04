<!-- 城市search组件 -->
<template>
  <div class="city-search">
      <input class="search-input" type="text" placeholder="请输入城市名/拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {

    };
  },

  components: {},

  computed: {},

  //mounted: {},

  methods: {}
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .city-search
        height .72rem
        padding .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            padding 0 .1rem //输入文字较长，左右留间隙，对应加上这个是为什么box-sizing border-box
            line-height .62rem
            color #666
            text-align center
            border-radius .06rem

</style>