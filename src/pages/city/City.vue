<<!-- 首页城市筛选页 -->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
  
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {

    };
  },

  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },

  computed: {},

  //mounted: {},

  methods: {}
}

</script>

<style scoped>

</style>