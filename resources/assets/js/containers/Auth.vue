<template>
    <div class="row">
        <div class="col-md-3">
            <c-nav :nav='nav'></c-nav>
        </div>

        <div class="col-md-9">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="sass">
</style>

<script>
    import cNav from '../components/Nav.vue';

    export default {
        data() {
            return {
                nav: 'auth',
            };
        },
        components:{
            cNav,
        },
    }
</script>
