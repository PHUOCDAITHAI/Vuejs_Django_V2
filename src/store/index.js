import axios from 'axios'
import { createStore } from 'vuex'
import auth from './modules/auth'
export default createStore({
  state: {
    todos: [],
    // auth: {
    //   isAuthenticated: false
    // }
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.completed),
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos
      return Math.round((doneTodos.length / state.todos.length) * 100)
    },
  },
  mutations: {
    
    MARK_COMPLETE(state, todoId){
      state.todos.map(todo => {
        if(todo.id === todoId){
          todo.completed = !todo.completed
          // return todo
        }
      })
    },
    DELETE_TODO(state, todoId){
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    ADD_TODO(state, newTodo){
      state.todos.unshift(newTodo)
    },
    SET_TODOS(state, todos){
      state.todos = todos
    }
  },
  actions: {
    async getTodos({commit}){
      try {
        let result = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        commit('SET_TODOS', result.data)
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodo({commit}, todoId){
      try {
        await axios.delete('https://jsonplaceholder.typicode.com/todos/'+todoId);
        commit('DELETE_TODO', todoId)
      } catch (error) {
        console.log(error)
      }
    },
    async addTodo({commit}, newTodo){
      try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        commit('ADD_TODO', newTodo)
      } catch (error) {
        console.log(error)
      }
      
    }
  },
  modules: {
    auth
  }
})
