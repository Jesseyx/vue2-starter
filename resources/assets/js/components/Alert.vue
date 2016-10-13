<template>
    <div :class="'alert alert-' + type || 'success'" v-if="show">
        <span class="glyphicon glyphicon-exclamation-sign"></span>
        <button type="button" class="close" @click="close">
            <span>&times;</span>
        </button>
        &emsp;{{ message }}
    </div>
</template>

<style lang="sass">
</style>

<script>
    export default {
        props: ['type', 'message'],
        data() {
            return {
                show: true,
            };
        },
        methods: {
          close() {
              this.show = !this.show;
          },
        },
    };
</script>
