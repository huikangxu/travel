import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions: { //直接通过commit调用mutations即可，但是不起作用，报错unknow actions changeCity
        changeCity (ctx, city) {
            // console.log(city)
            ctx.commit('changeCity', city)
        }
    },
    mutations   
})