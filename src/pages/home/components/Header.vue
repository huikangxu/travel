<template>
	<div class="header"> 
		<div class="header-left">
			<span class="iconfont back-icon">&#xe60e;</span>
		</div>
		<div class="header-input">
			<span class="iconfont input-icon">&#xe635;</span>请输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}<span class="iconfont arrow-icon">&#xe63d;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name : 'HomeHeader',
	computed: {
		...mapState(['city'])
	}
	// props: {
	// 	city: String
	// }
}
</script>

<!-- <style lang="stylus"  scoped> -->
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header
		display: flex
		line-height: $headerHight
		background: $bgColor
		color: #fff
	.header-left 
		width: .4rem
		float: left
		.back-icon 
			/*text-align: center;*/
			font-size: .4rem
			margin-left: .1rem
	.header-input 
		flex: 1
		height: .64rem
		line-height: .64rem
		margin-top: .12rem
		margin-left: .2rem
		background: #fff
		border-radius: .1rem
		color: #ccc
		.input-icon 
				margin-left: .1rem
				margin-right: .1rem
	.header-right
		min-width: 1.5rem
		padding 0 .1rem
		float: right
		margin-left: 10px
		text-align: center;
		color #fff
		.arrow-icon
			/*margin-left: -.05rem;*//*箭头往左移动*/
			font-size: .25rem
</style>


