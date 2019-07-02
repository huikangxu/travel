<template>
	<div>
		<div class="home"></div>
		<!-- <router-link to="/list">列表页</router-link> -->
		<home-header>this is header</home-header>
	</div>
	
</template>

<script>
import HomeHeader from './components/Header'
export default{
	name: 'Home',
	components: {
		HomeHeader
	}
}
</script>

<style>
	.home {
		font-size: 50px;
	}
</style>