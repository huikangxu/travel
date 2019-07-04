<<!-- 首页推荐组件 -->
<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" 
                v-for="item of list"
                :key='item.id'
            >   
                <div class="item-img-warpper">
                    <img class="item-img" :src='item.imgUrl'/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
      list: Array
  },
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
@import '~styles/mixins.styl'
    .title
        // margin-top: .2rem //加上会有留白，为什么？？
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding 33.9%
    .item-img
        width 100% 
    .item-info
        padding: .1rem 
        .item-title
            line-height: .5rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc


</style>