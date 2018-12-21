import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/home-page";
import TODO from "./components/to-do"
import DIVControl from "./components/div-control"
import WebSkin from "./components/web-skin"

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage },
    { path: '/div-control', component: DIVControl },
    { path: '/web-skin', component: WebSkin },
    { path: '/to-do', component: TODO },
];

const router = new VueRouter({
    routes,
});

router.afterEach(function () {
    router.app.homeShow = router.currentRoute.path !== '/';
})

new Vue({
    el:"#app",
    data:{
        homeShow :true,
    },
    router,
    created: function () {
        this.homeShow = router.currentRoute.path !== '/';
    }
});