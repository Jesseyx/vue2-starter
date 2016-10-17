<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/">{{ logo }}</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'dog' }" v-if="getAuth">Dog</router-link>
                    </li>
                </ul>

                <div class="nav navbar-nav navbar-right">
                    <ul class="nav navbar-nav" v-if="!getAuth">
                        <li>
                            <router-link :to="{ name: 'login' }">Login</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'register' }">Register</router-link>
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
                                    <router-link :to="{ name: 'profile' }">
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
    import { mapGetters } from 'vuex'

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
