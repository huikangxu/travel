<!-- 首页图标组件 -->
<template>
  <div class="icons">
    <swiper :options="swiperOption">
		  <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
            <div class="icon-img">
                <img class="icon-img-content" :src='item.imgUrl' />
            </div>
            <div class="icon-desc">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>  
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },

  components: {},

  computed: {
    pages () {
      const pages = []
      this.list.forEach((item,index)=>{
        const page = Math.floor(index/8) //计算某图在第几页
       if(!pages[page]) {
          pages[page] = [];

        }
        pages[page].push(item)
      })
      return pages;

    }
  },

//   mounted: {},

  methods: {}
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>> .swiper-container //定义这个容器的样式，可以使整个模块轮播，而不只是icons一块
        overflow: hidden //有什么作用，加不加都可以：防止浮动？？
        height : 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left //这个float的作用是什么，不加的话后面4个会一直往下显示
        // height: 0
        width: 25%
        padding-bottom: 25% //这个是相对于父div的下边距，为什么上面四个和下面四个显示的位置不同
        .icon-img
            position: absolute 
            top: 0
            left: 0
            right: 0
            bottom: .44rem //这是留白写图标下方的字
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute 
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()

</style>