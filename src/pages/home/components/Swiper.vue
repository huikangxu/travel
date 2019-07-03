<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	</div>
</template>

<script>
export default{
	name: 'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true //循环轮播
			},
			swiperList: [{
				id: '0001',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/1f69b3ab28f9962158c798a8a3f5b4b3.jpg_750x200_fb4bf7c4.jpg'
			},{
				id: '0002',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5eb82a8ca5b0cebb2c3ae1a53a4d8f81.jpg_750x200_645bfba1.jpg'
			},{
				id: '0003',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/bc62e131afb380e98e4beac33e751c6c.jpg_750x200_2e248116.jpg'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active {
		background: #fff;
	}

	.wrapper {
		overflow: hidden;
		width: 100%;
		// height: 0;
		background: #eee;
		// padding-bottom: 31.25%;
	}
	

	.wrapper .swiper-img {
		width: 100%;
	}
</style>