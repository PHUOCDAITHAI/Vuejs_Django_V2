<template>
  <div id="app">
    <NavbarView />
    <TodosView />
    <StatusBarView />
    <ProgressBarView />
  </div>
  <router-view/>
</template>

<script>
import TodosView from './views/TodosView.vue'
import NavbarView from './views/NavbarView.vue'
import StatusBarView from './views/StatusBarView.vue'
import ProgressBarView from './views/ProgressBarView.vue'
export default {
  name: 'App',
  components: {
    TodosView,
    NavbarView,
    StatusBarView,
    ProgressBarView
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219,219,219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px
}

</style>
