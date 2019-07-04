<<!-- 首页城市筛选页 -->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
  
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  data () {
    return {

    };
  },

  components: {
    CityHeader,
    CitySearch
  },

  computed: {},

  //mounted: {},

  methods: {}
}

</script>

<style scoped>

</style>