import Home from '../containers/Home.vue';
import Welcome from '../components/Home/Welcome.vue';
import AboutMe from '../components/Home/AboutMe.vue';
import Auth from '../containers/Auth.vue';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';
import Profile from '../components/Auth/Profile.vue';
import Dog from '../containers/Dog.vue';
import Index from '../components/Dog/Index.vue';
import Create from '../components/Dog/Create.vue';
import Edit from '../components/Dog/Edit.vue';
import notFound from '../containers/Page404.vue';

const routes = [
    {
        path: '/home',
        name: 'home',
        alias: '/',
        component: resolve => resolve(Home),
        children: [
            {
                path: '',
                component: resolve => resolve(Welcome),
            },
            {
                path: 'welcome',
                name: 'welcome',
                component: resolve => resolve(Welcome),
            },
            {
                path: 'about',
                name: 'about',
                component: resolve => resolve(AboutMe),
            },
        ],
    },
    {
        path: '/auth',
        name: 'auth',
        component: resolve => resolve(Auth),
        children: [
            {
                path: '',
                component: resolve => resolve(Login),
            },
            {
                path: 'login',
                name: 'login',
                guest: true,
                component: resolve => resolve(Login),
            },
            {
                path: 'register',
                name: 'register',
                guest: true,
                component: resolve => resolve(Register),
            },
            {
                path: 'profile',
                name: 'profile',
                auth: true,
                component: resolve => resolve(Profile),
            }
        ],
    },
    {
        path: '/dog',
        name: 'dog',
        auth: true,
        component: resolve => resolve(Dog),
        children: [
            {
                path: '',
                component: resolve => resolve(Index),
            },
            {
                path: 'index',
                name: 'index',
                component: resolve => resolve(Index),
            },
            {
                path: 'create',
                name: 'create',
                component: resolve => resolve(Create),
            },
            {
                path: 'edit/:id',
                name: 'edit',
                component: resolve => resolve(Edit),
            },
        ],
    },
    {
        path: '*',
        component: resolve => resolve(notFound),
    },
];

export default routes;
