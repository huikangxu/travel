<<!-- 首页推荐组件 -->
<template>
    <div>
        <div class="recommend-title">热门推荐</div>
        <ul>
            <li class="item border-bottom" 
                v-for="item of RecommendList"
                :key='item.id'
            >
                <img class="item-img" :src='item.imgUrl'/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
        RecommendList: [{
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            title: '北京欢乐谷',
            desc: '亚洲唯一飞行式过山车等你来挑战'
        },
        {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title: '故宫',
            desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
            title: '北京野生动物园',
            desc: '敢与森林之王近距离接触吗？'
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
    // .recommend-title
    //     height: 40px
    //     line-height: 40px
    //     background: #eee
    //     margin-top: 16px
    .recommend-title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1 //撑开
            padding: .1rem 
            min-width: 0
            .item-title
                line-height: .5rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
             .item-button
                line-height: .44rem
                margin-top: .2rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .05rem
                color: #fff
                

</style>