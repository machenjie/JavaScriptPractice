import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/home-page";
import TODO from "./components/to-do";
import DIVControl from "./components/div-control";
import WebSkin from "./components/web-skin";
import MouseOver from "./components/mouse-over";
import ToolTip from "./components/tooltip";
import DropDown from "./components/dropdown";
import InnerHTML from "./components/inner-html";
import SumArray from "./components/sum-array";
import PopupDialog from "./components/popup-dialog";
import FuncInvoke from "./components/func-invoke";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage },
    { path: '/div-control', component: DIVControl },
    { path: '/web-skin', component: WebSkin },
    { path: '/func-invoke', component: FuncInvoke},
    { path: '/mouse-over', component: MouseOver},
    { path: '/tool-tip', component: ToolTip},
    { path: '/dropdown', component: DropDown},
    { path: '/inner-html', component: InnerHTML},
    { path: '/sum-array', component: SumArray},
    { path: "/popup-dialog", component: PopupDialog},
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