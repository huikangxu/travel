<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'

export default{
	name: 'Home',
	data () {
		return {
			lastCity: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index.json?city=' + this.city)
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
				// console.log(res)
				res = res.data
				if(res.ret && res.data) {
					const data = res.data
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
					
				}
		}	
	},
	computed: {
		...mapState(['city'])
	},
	mounted () {
		this.lastCity = this.city
		this.getHomeInfo()
	},
	activated () {
		if (this.lastCity !== this.city) { //如果当前城市和上次城市不同，就执行getHomeInfo(),执行ajax重新获取
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}

}
</script>

<style>
.home {
  font-size: 50px;
}
</style>