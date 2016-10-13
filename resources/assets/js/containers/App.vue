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

    export default {
        components: {
            cHeader,
        },
        created() {
            let token = localStorage.getItem('jwt-token');
            if (token !== null && token !== 'undefined') {
                this.$http.get('/api/me', { params: { token } }).then((response) => {
                    this.$store.dispatch('me', {
                        name: response.data.user.name,
                        token,
                    });
                }, (response) => {
                    this.$store.dispatch('logout');
                });
            }
        },
    };
</script>
