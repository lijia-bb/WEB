import Vue from 'vue'
import Vuex from 'vuex'
const mouduleA={
  state:{
    me:1
  },
  mutations:{
    add2(state){

      state.me+=1
    }
  }
}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {/* 单一状态树 存放公共变量*/
    count:1,
    count2:100,
    count3:2,
    countA:2,
    countB:3,
  },
  mutations: {/* 同步修改方法 */
    add(state,num){
      state.count+=num;
    },
    // add(state){
    //   state.count+=1;
    // },
    reduce(state,num2){
      state.count2-=num2
    },
    mul(state,payload){
      state.count3*=payload.a+payload.b
    }
  },
  actions: {/* 异步修改 */
    action(context,payload){
      context.commit('reduce',payload)
    }
    // action(context){
    //   context.commit('add')
    // }
  },
  getters:{
    sum(state){
      return state.count+100
    }
  },
  modules: {/* 模块化 */
      good:mouduleA
  }
})
