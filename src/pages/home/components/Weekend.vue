<<!-- 首页推荐组件 -->
<template>
    <div>
        <div class="recommend-title">周末去哪</div>
        <ul>
            <li class="item border-bottom" 
                v-for="item of RecommendList"
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
  data () {
    return {
        RecommendList: [{
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '北京欢乐谷',
            desc: '亚洲唯一飞行式过山车等你来挑战'
        },
        {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
            title: '京城溜娃必去',
            desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
        }]
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
    .recommend-title
        margin-top: .2rem
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