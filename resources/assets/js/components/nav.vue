<template>
    <div class="panel panel-default my-panel">
        <div class="panel-heading">NAV</div>

        <div class="panel-body">
            <ul class="list-group" v-if="is('home')">
                <li class="list-group-item">
                    <router-link :to="{ name: 'welcome' }" active-class="active">
                        <span class="glyphicon glyphicon-menu-hamburger"></span>
                        &emsp;Welcome
                    </router-link>
                </li>

                <li class="list-group-item">
                    <router-link :to="{ name: 'about' }" active-class="active">
                        <span class="glyphicon glyphicon-eye-open"></span>
                        &emsp;About me
                    </router-link>
                </li>
            </ul>

            <ul class="list-group" v-if="is('auth')">
                <li class="list-group-item">
                    <router-link :to="{ name: 'login' }" active-class="active">
                        <span class="glyphicon glyphicon-log-in"></span>
                        &emsp;Login
                    </router-link>
                </li>

                <li class="list-group-item">
                    <router-link :to="{ name: 'register' }" active-class="active">
                        <span class="glyphicon glyphicon-send"></span>
                        &emsp;Register
                    </router-link>
                </li>
            </ul>

            <ul class="list-group" v-if="is('dog')">
                <li class="list-group-item">
                    <router-link :to="{ name: 'index' }" active-class="active">
                        <span class="glyphicon glyphicon-menu-hamburger"></span>
                        &emsp;All Dog
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'create' }" active-class="active">
                        <span class="glyphicon glyphicon-copyright-mark"></span>
                        &emsp;Create Dog
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="sass">
    .my-panel {
        border-radius: 0;
        .panel-body {
            padding: 0;
            .list-group {
                margin-bottom: 0;

                .list-group-item {
                    a {
                        color: #000000;
                    }

                    a:hover, a:visited, a:link {
                        text-decoration: none;
                    }

                    a.active {
                        span {
                            color: green;
                        }
                    }
                }

                .list-group-item:first-child {
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }

                .list-group-item:last-child {
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
    }
</style>

<script>
    export default {
        props: ['nav'],
        methods: {
            is(nav) {
                return this.nav === nav;
            },
        },
    };
</script>
