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
    import { me } from '../vuex/actions';

    export default {
        components: {
            cHeader,
        },

        store,

        vuex: {

        },

        ready() {
            let token = localStorage.getItem('jwt-token');
            if (token !== null && token !== 'undefined') {
                this.$http.get('/api/me', { params: { token } }).then((response) => {
                    me(store, response.data.user.name, token);
                }, (response) => {
                    console.log(response);
                });
            }
        }
    };
</script>
