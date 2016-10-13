<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ title }}</div>

        <div class="panel-body">
            <div v-for="error in getValidateError">
                <alert type="danger" :message="error"></alert>
            </div>

            <form
                class="form-horizontal col-md-10 col-md-offset-1"
                @submit.stop.prevent="register"
            >
                <div class="form-group">
                    <span class="col-md-4 control-label">Name</span>
                    <div class="col-md-8">
                        <input class="form-control" type="text" placeholder="Input your Name" v-model="name">
                    </div>
                </div>

                <div class="form-group">
                    <span class="col-md-4 control-label">Email</span>
                    <div class="col-md-8">
                        <input class="form-control" type="text" placeholder="Input your Email" v-model="email">
                    </div>
                </div>

                <div class="form-group">
                    <span class="col-md-4 control-label">Passowrd</span>
                    <div class="col-md-8">
                        <input class="form-control" type="password" placeholder="Input your Passowrd" v-model="password">
                    </div>
                </div>

                <div class="form-group">
                    <span class="col-md-4 control-label">Confirm Password</span>
                    <div class="col-md-8">
                        <input class="form-control"  type="password"placeholder="Confirm your Passowrd" v-model="password_confirmation">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-9 col-md-offset-4">
                        <button class="btn btn-success" type="submit">
                            <span class="glyphicon glyphicon-send"></span>&emsp;Register
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
</style>

<script>
    import { mapGetters } from 'vuex';
    import Alert from '../Alert.vue';

    export default {
        data() {
            return {
                title: 'Register',
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            };
        },
        components: {
            Alert,
        },
        computed: {
            ...mapGetters(['getValidateError']),
        },
        methods: {
            register() {
                this.$store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                });
            },
        },
    };
</script>
