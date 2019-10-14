import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 10 // The TV inventory
  },
  
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
    // To update a state you will need to commit a mutation. A mutation does not care about business logic, 
    // it’s only purpose is updating the state. A mutation is synchronous (your code has to wait until the mutation is done). 
    // Mutations should be the only way used to update your state, to keep your state management predictable.
    removeTv(state) {
        state.totalTvCount--
      }
  },
  
  actions: {
    // An action contains business logic and it does not care about updating the state directly. 
    // The reason is that actions are asynchronous (your code can continue to run even if the action is not finished yet), 
    // this is useful if you need to wait to receive data from an API for example. An action will dispatch a mutation, 
    // which will directly update the state.
    removeTv(context) {
        if(context.state.totalTvCount) {
          context.commit('removeTv')
        }
      }
  }
});