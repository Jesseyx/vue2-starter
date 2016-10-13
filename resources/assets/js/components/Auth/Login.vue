<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ title }}</div>

        <div class="panel-body">
            <div v-for="error in getValidateError">
                <alert type="danger" :message="error"></alert>
            </div>

            <form class="form-horizontal col-md-10 col-md-offset-1" @submit.stop.prevent="login({ clinet: this, email, password })">
                <div class="form-group">
                    <span class="col-md-4 control-label">Email</span>
                    <div class="col-md-8">
                        <input class="form-control" type="text" placeholder="Email" v-model="email">
                    </div>
                </div>

                <div class="form-group">
                    <span class="col-md-4 control-label">Passowrd</span>
                    <div class="col-md-8">
                        <input class="form-control" type="password" placeholder="Passowrd" v-model="password">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-9 col-md-offset-4">
                        <button class="btn btn-success" type="submit">
                            <span class="glyphicon glyphicon-log-in"></span>&emsp;Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="sass">
    .panel {
        border-radius: 0;
    }

    .control-label {
        font-size: 16px;
    }

    .form-control {
        border-radius: 0;
    }
</style>

<script>
    import { mapGetters } from 'vuex';
    import Alert from '../Alert.vue';

    export default {
        data() {
            return {
                title: 'Login',
                email: '',
                password: '',
            };
        },
        components: {
            Alert,
        },
        computed: {
            ...mapGetters(['getValidateError']),
        },
        methods: {
            login() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                });
            },
        },
    };
</script>
