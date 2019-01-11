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
import CSSModify from "./components/css-modify";
import PictureOpacity from "./components/picture-opacity";
import EasyNavTab from "./components/easy-nav-tab";
import JSAlmanac from "./components/js-almanac";
import BeautyGirl from "./components/beauty-girl";
import CheckboxUse from "./components/checkbox-use";
import CountDown from "./components/count-down";
import WebCalculator from  "./components/web-calculator";
import WebClock from "./components/web-clock";
import SubNavTab from "./components/sub-nav-tab";
import AutoplaySlide from "./components/autoplay-slide";
import FocusHighlight from "./components/focus-highlight";
import StarRating from "./components/star-rating";
import MouseCoordinates from "./components/mouse-coordinates";
import KeyCode from "./components/key-code";
import BlockContextMenu from "./components/block-context-menu";
import MouseMove from "./components/mouse-move";
import CustomContextMenu from "./components/custom-context-menu";
import ControlBox from "./components/control-box";
import DivFlash from "./components/div-flash";
import DivDrag from "./components/div-drag";
import TencentBlog from "./components/tencent-blog";
import MultiLevelContextMenu from "./components/multi-level-context-menu";
import AutoplaySlideUpdown from "./components/autoplay-slide-updown";
import PicLoadAnimation from "./components/pic-load-animation";
import MoveCharacter from "./components/move-character";
import IphoneUnlock from "./components/iphone-unlock";
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
    { path: '/popup-dialog', component: PopupDialog},
    { path: '/css-modify', component: CSSModify},
    { path: '/picture-opacity', component: PictureOpacity},
    { path: '/easy-nav-tab', component: EasyNavTab},
    { path: '/js-almanac', component: JSAlmanac},
    { path: '/beauty-girl', component: BeautyGirl},
    { path: '/checkbox-use', component: CheckboxUse},
    { path: '/count-down', component: CountDown},
    { path: '/web-calculator', component: WebCalculator},
    { path: '/web-clock', component: WebClock},
    { path: '/sub-nav-tab', component: SubNavTab},
    { path: '/autoplay-slide', component: AutoplaySlide},
    { path: '/focus-highlight', component: FocusHighlight},
    { path: '/star-rating', component: StarRating},
    { path: '/mouse-coordinates', component: MouseCoordinates},
    { path: '/key-code', component: KeyCode},
    { path: '/block-context-menu', component: BlockContextMenu},
    { path: '/mouse-move', component: MouseMove},
    { path: '/custom-context-menu', component: CustomContextMenu},
    { path: '/control-box', component: ControlBox},
    { path: '/div-flash', component: DivFlash},
    { path: '/div-drag', component: DivDrag},
    { path: '/tencent-blog', component: TencentBlog},
    { path: '/multi-level-context-menu', component: MultiLevelContextMenu},
    { path: '/autoplay-slide-updown', component: AutoplaySlideUpdown},
    { path: '/pic-load-animation', component: PicLoadAnimation},
    { path: '/move-character', component: MoveCharacter},
    { path: '/iphone-unlock', component: IphoneUnlock},
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