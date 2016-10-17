<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ title }}</div>
        <div class="panel-body">
            <div v-for="error in getValidateError">
                <alert type="danger" :message="error"></alert>
            </div>

            <form class="form-horizontal col-md-10 col-md-offset-1" @submit.stop.prevent="editDog">
                <div class="form-group">
                    <span class="col-md-4 control-label">Dog Name</span>
                    <div class="col-md-8">
                        <input class="form-control" type="text" placeholder="Dog Name" v-model="name">
                    </div>
                </div>

                <div class="form-group">
                    <span class="col-md-4 control-label">Dog Age</span>
                    <div class="col-md-8">
                        <input class="form-control" type="text" placeholder="Dog Age" v-model="age">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-9 col-md-offset-4">
                        <button class="btn btn-success" type="submit">
                            <span class="glyphicon glyphicon-certificate"></span>&emsp;Edit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
</style>

<script>
    import { mapGetters } from 'vuex';
    import Alert from '../Alert.vue';

    export default {
        data() {
            return {
                title: 'Edit Dog',
                id: '',
                name: '',
                age: '',
            };
        },
        components: {
            Alert,
        },
        computed: {
            ...mapGetters(['getValidateError']),
        },
        metheds: {
            editDog() {
                this.$store.dispatch('editDog', {
                    id: this.id,
                    name: this.name,
                    age: this.age,
                });
            },
        },
        created() {
            this.id = this.$route.params.id;
            let token = localStorage.getItem('jwt-token');
            this.$http.get(`/api/dog/${this.id}?token=${token}`).then((response) => {
                this.name = response.data.dog.name;
                this.age = response.data.dog.age;
            }, (response) => {
                this.$store.dispatch('showErrors', ['The Dog not exist']);
            });
        },
    };
</script>
