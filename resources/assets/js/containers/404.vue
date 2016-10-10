<template>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">{{ title }}</div>
            <div class="panel-body">{{ content }}</div>
        </div>
    </div>
</template>

<style lang="sass">
</style>

<script>
    import cHeader from '../components/Header.vue';

    export default {
        data() {
            return {
                title: '404 NOT FOUND',
                content: 'this is 404 page, route: ' + this.$route.path + ' is invail.',
            };
        },
    };
</script>
