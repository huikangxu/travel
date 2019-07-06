<<!-- 城市列表字母模块 -->
<template>
  <div class="list">
      <div class="item">A</div>
      <div class="item">A</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
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
    .list
        position absolute
        display flex
        flex-direction column
        justify-content center 
        top 1.78rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem //行距大些
            text-align center
            color $bgColor

</style>