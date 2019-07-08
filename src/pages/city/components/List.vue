<!-- 城市选择列表 -->
<template>
  <div class="list" ref="wrapper">
    <!-- 这层div是为了符合better-scroll的结构 -->
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <!-- 当前城市下的城市按钮 -->
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <!-- 当前城市下的城市按钮 -->
        <div class="button-list">
          <div
            class="button-wrapper" 
            v-for="item of hot"
            :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 城市字母列表 -->
      <div 
        class="area" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },

  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {  //监听letter的变化
    letter () {
      // console.log(this.letter)
      if(this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
    
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom 
  &:before 
    border-color: #ccc
  &:after 
    border-color: #ccc;

.border-bottom 
  &:before 
    border-color: #ccc;
  &:after 
    border-color: #ccc;

.list 
  overflow: hidden;
  position: absolute;
  top: 89px;
  left: 0;
  right: 0;
  bottom: 0;

  .title 
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;

  .button-list 
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper 
      float: left;
      width: 33.33%;

      .button 
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;

  .item-list 
    line-height: 0.76rem;
    padding-left: 0.2rem;
  
</style>