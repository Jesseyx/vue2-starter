import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

/* register plugin */
Vue.use(Router);

/* register router */
const router = new Router({
    // mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('jwt-token');
    if (to.auth && (!token || token === null)) {
        next('/auth/login');
    }

    if (to.guest && token) {
        next('/auth/profile');
    }

    next();
});

export default router;
