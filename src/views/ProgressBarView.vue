<template>
    <p v-if="auth.auth.isAuthenticated" class="progress-bar">Progress: {{progress}}%</p>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'Progressbar',
    computed: {
        ...mapGetters(['progress']),
        ...mapState(['auth'])
    }
}
</script>

<style>
.progress-bar {
    padding: 5px;
    text-align: center;
    background: rgb(106,248,118);
    color: black;
}
</style>