<template>
  <div id="app">
    <!-- 包裹<router-view>路由的内容，使得加载城市页面的ajax只一次 --> 
    <keep-alive> 
      <!-- <img src="./assets/logo.png"> -->
      <router-view />
      <!-- 显示的是当前路由地址索对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

  <style>
/* // #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
 } */
</style>
