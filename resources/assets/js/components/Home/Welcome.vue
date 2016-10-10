<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ title }}</div>
        <div class="panel-body">{{ content }}</div>
    </div>
</template>

<style lang="sass">
    .panel {
        border-radius: 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                title: 'Welcome',
                content: 'Welcome to my page!',
            };
        },
    };
</script>
