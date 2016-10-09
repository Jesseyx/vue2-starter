<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#" v-link="{path: '/'}">{{ logo }}</a>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="#" v-link="{name: 'home', 'activeClass': 'active'}">Home</a></li>
                    <li><a href="#">Dog</a></li>
                </ul>

                <div class="nav navbar-nav navbar-right">
                    <ul class="nav navbar-nav">
                        <li><a href="#" v-link="{name:'login', 'activeClass': 'active'}">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>

                    <ul class="nav navbar-nav">
                        <li class="dropdown">
                            <a class="dropdown-toggle" href="javascript:void(0);">
                                getName <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-header">Settings</li>
                                <li>
                                    <a>
                                        <i class="glyphicon glyphicon-user"></i>
                                        &nbsp;Your profile
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="javascript:void(0);">
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
    export default {
        data() {
            return {
                logo: 'Laravel & Vue.js',
                show: false,
            }
        },
    };
</script>
