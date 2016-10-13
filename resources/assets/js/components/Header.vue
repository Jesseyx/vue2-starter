<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/" active-class="active">{{ logo }}</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link :to="{ name: 'home' }" active-class="active">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'dog' }" active-class="active" v-if="getAuth">Dog</router-link>
                    </li>
                </ul>

                <div class="nav navbar-nav navbar-right">
                    <ul class="nav navbar-nav" v-if="!getAuth">
                        <li>
                            <router-link :to="{ name: 'login' }" active-class="active">Login</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'register' }" active-class="active">Register</router-link>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav" v-else>
                        <li class="dropdown">
                            <a class="dropdown-toggle" href="javascript: void(0);" @click="toggle">
                                {{ getName }} <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" :class="{ show: show }">
                                <li class="dropdown-header">Settings</li>
                                <li>
                                    <router-link :to="{ path: '/auth/profile' }" active-class="active">
                                        <i class="glyphicon glyphicon-user"></i>
                                        &nbsp;Your profile
                                    </router-link>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="javascript: void(0);" @click="logout">
                                        <i class="glyphicon glyphicon-log-out"></i>
                                        &nbsp;Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="sass">
    .navbar {
        .navbar-header {
            font-weight: 300;
            .navbar-brand {
                height: auto;
                line-height: 34px;
                font-size: 24px;
            }
        }

        .navbar-nav {
            li {
                a {
                    padding-top: 22px;
                    padding-bottom: 22px;
                    &.active {
                        text-decoration: underline;
                    }
                }
            }
        }

        .dropdown-menu {
            li {
                a {
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
            }
        }
    }

    .show {
        display: inline;
    }
</style>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                logo: 'Laravel & Vue.js',
                show: false,
            };
        },
        computed: {
            ...mapGetters([
                'getAuth',
                'getName',
            ]),
        },
        methods: {
            toggle() {
                this.show = !this.show;
            },
            logout() {
                this.$store.dispatch('logout');
                this.$router.push({ name: 'login' });
            },
        },
    };
</script>
