<template>
    <div class="status-bar" v-if="auth.auth.isAuthenticated">
        <p>Done</p>
        <ul v-for="todo in doneTodos" :key="todo.id">
            <li>{{todo.title}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState ,mapGetters } from 'vuex';
export default {
    name: 'StatusBar',
    computed: {
        ...mapGetters(['doneTodos']),
        ...mapState(['auth'])
    }
}
</script>

<style>
.status-bar {
    padding: 5px;
    text-align: center;
    background: rgb(240,240,240);
    color: black;
}
.status-bar ul {
    list-style-type: none;
}
</style>