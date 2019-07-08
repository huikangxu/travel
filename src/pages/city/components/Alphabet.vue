<!-- 城市列表字母模块 -->
<template>
  <ul class="list" >
      <li class="item" 
          v-for="(item, key) of cities" 
          :key="key"
          @click="handleLetterClick"
      >
        {{key}}
      </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  components: {},

  computed: {},

  //mounted: {},

  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText);
      this.$emit('change', e.target.innerText)  //点击会触发change时间，由city监听这个事件
    }
  }
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