import Home from './containers/Home.vue';

export default (router) => {
    router.map({
        '/home': {
            name: 'home',
            component: resolve => resolve(Home),
        }
    });
}
