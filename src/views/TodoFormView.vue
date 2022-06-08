<template>
    <form @submit.prevent="onSubmit()" v-if="auth.auth.isAuthenticated">
        <input type="text" v-model="title" />
        <input type="submit" value="Add" />
    </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {v4 as uuidv4} from 'uuid'
export default {
    name: 'TodoForm',
    data(){
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(){
            this.addTodo({
                id: uuidv4(),
                title: this.title,
                completed: false
            })
            this.title = ''
        }
    },
    computed: {
        ...mapState(['auth'])
    }
}
</script>

<style>
form {
    padding: 10px;
    overflow: hidden;
}
input[type='text']{
    width: 94%;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
}
input[type='submit']{
    display: block;
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 20px;
    background: blue;
    color: white;
    border-radius: 50%;
    cursor: pointer;
}
</style>