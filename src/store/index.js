import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        name: 'Алексей',
        info: [
          { title: 'телефон', value: '89149805085' }
        ]
      }
    ]
  },
  mutations: {
    deleteElement(state, deleteObj) {
      if (deleteObj.type === 'person') {
        state.contacts.splice(deleteObj.i1, 1)
      } else if (deleteObj.type === 'personInfo') {
        state.contacts[deleteObj.i1].info.slice(deleteObj.i2, 1)
      }
    },
    addPerson(state, name){
      let newPerson = {
        name,
        info: []
      }
      state.contacts.push(newPerson)
    }
  },
  actions: {
  },
  modules: {
  }
})
