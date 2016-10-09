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
                this.$http.get('/api/me', {token}).then((res) => {
                    console.log(res);
                }, (res) => {
                    console.log(res);
                });
            }
        }
    };
</script>
