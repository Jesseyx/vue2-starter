<template>
    <div>
        <c-header></c-header>
        <br>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="sass">
</style>

<script>
    import cHeader from '../components/Header.vue';
    import store from '../vuex/store';
    import { me, logout } from '../vuex/actions';

    export default {
        components: {
            cHeader,
        },
        store,
        vuex: {
            actions: {
                me, logout,
            },
        },
        ready() {
            let token = localStorage.getItem('jwt-token');
            if (token !== null && token !== 'undefined') {
                this.$http.get('/api/me', { params: { token } }).then((response) => {
                    me(store, response.data.user.name, token);
                }, (response) => {
                    logout(store);
                });
            }
        },
    };
</script>
