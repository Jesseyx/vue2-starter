<template>
    <div>
        <c-header></c-header>
        <br>
        <div class="container">

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
    };
</script>
