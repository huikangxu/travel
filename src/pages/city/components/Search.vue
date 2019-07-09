<!-- 城市search组件 -->
<template>
  <div>
    <div class="city-search">
        <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名/拼音"/>
    </div>
    <div 
      class="search-content" 
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li 
          class="search-item border-bottom"
          v-for="item of list" 
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li 
          class="search-item border-bottom" 
          v-show="hasNoData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    };
  },
  watch: { //监听kwyword的变化
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) { //输入关键字显示城市列表，删除关键字不显示内容
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) { //搜索框中空
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  components: {},

  computed: {
    hasNoData () {
      return !this.list.length
    }
  },

  mounted () { //钩子？
    this.scroll = new Bscroll(this.$refs.search)
  },

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
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.7rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666

            

</style>