<template>
    <div class="todo-list">
        <TodoFormView />
        <ul v-if="auth.auth.isAuthenticated">
            <li  v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed': ''">
                {{todo.title}}
                <input type="checkbox" 
                    :checked="todo.completed" 
                    @change="MARK_COMPLETE(todo.id)"
                />
                <button @click="deleteTodo(todo.id)">Delete</button>
            </li>
        </ul>
        <p v-else>Not authorised</p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import TodoFormView from './TodoFormView.vue'
export default {
    name: 'Todos',
    components: {
        TodoFormView
    },
    computed: mapState(['todos','auth']),
    methods: {
        ...mapMutations(['MARK_COMPLETE']),
        ...mapActions(['deleteTodo', 'getTodos'])
    },
    created(){
        this.getTodos()
    }
}
</script>

<style lang="scss">
.todo-list ul{
    padding: 10px;
    list-style-type: none;
}

.todo-list li {
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 4px;
    background: rgb(240, 240, 240);
    color: black;
}

.todo-list p {
    text-align: center;
}

.todo-list li input[type='checkbox']{
    -ms-transform: scale(2);
    -moz-transform: scale(2);
    -webkit-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
    padding: 10px;
    float: right;
}

.todo-list li.completed {
    background: rgb(119,218,243);
}

.todo-list li button {
    float: right;
    margin-right: 20px;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    background: black;
    color: white;
    transition: .5s;
    margin-top: -3px;
}

.todo-list li button:hover {
    cursor: pointer;
    background: red;
    color: white;
}
</style>