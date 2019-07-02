<template>
	<div class="header"> 
		<div class="header-left">
			<span class="iconfont back-icon">&#xe60e;</span>
		</div>
		<div class="header-input">
			<span class="iconfont input-icon">&#xe635;</span>请输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			城市<span class="iconfont arrow-icon">&#xe63d;</span>
		</div>
	</div>
</template>
 
<!-- <style lang="stylus"  scoped> -->
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header {
		display: flex;
		line-height: .86rem;
		background: $bgColor;
		color: #fff;
	}

	.header-left {
		width: .4rem;
		float: left;
	}
	
	.header-left .back-icon {
		/*text-align: center;*/
		font-size: .4rem;
		margin-left: .1rem;
	}

	.header-input {
		flex: 1;
		height: .64rem;
		line-height: .64rem;
		margin-top: .12rem;
		margin-left: .2rem;
		background: #fff;
		border-radius: .1rem;
		color: #ccc;
	}

	.header-input .input-icon {
		margin-left: .1rem;
		margin-right: .1rem;
	}

	.header-right {
		width: 1.5rem;
		float: right;
		margin-left: 10px;
		/*text-align: center;*/
	}

	.header-right .arrow-icon {
		/*margin-left: -.05rem;*//*箭头往左移动*/
		font-size: .25rem;
	}
</style>

<script>
export default {
	name : 'HomeHeader'
}
</script>

