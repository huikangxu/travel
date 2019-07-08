<!-- 城市筛选页的header -->
<template>
        <div class="header">
            城市选择
            <router-link to="/">
                <div class="iconfont back-icon">&#xe60e;</div>     
            </router-link>
        </div>
        
</template>

<script>
export default {
  name: 'CityHeader',
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
    .header
        position relative
        overflow hidden
        height $headerHight
        line-height $headerHight
        width 100%
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .back-icon
            position absolute 
            top 0
            left 0
            width .64rem
            text-align center
            color #fff
            font-size .4rem


</style>