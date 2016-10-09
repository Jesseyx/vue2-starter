import Home from './containers/Home.vue';
import Auth from './containers/Auth.vue';
import Login from './components/Auth/Login.vue';

export default (router) => {
    router.map({
        '/home': {
            name: 'home',
            component: resolve => resolve(Home),
        },
        '/auth': {
            name: 'auth',
            component: resolve => resolve(Auth),
            subRoutes: {
                login: {
                    name: 'login',
                    guest: true,
                    component: resolve => resolve(Login),
                },
            },
        },
    });

    router.beforeEach(({ to, next, redirect }) => {
        let token = localStorage.getItem('jwt-token');
        if (to.auth && (!token || token === null)) {
            redirect('/auth/login');
        }

        if (to.guest && token) {
            redirect('/auth/profile');
        }

        next();
    });
}
