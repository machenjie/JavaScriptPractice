<template>
    <ul ref="root" :style='{display: showAll?"block":"none"}'>
        <li v-for="menu in menuList" :key="menu.key">
            <div class="content" v-if="menu.content.length!==0">
                {{menu.content}}
                <div class="arrow" v-if="menu.menuList.length!==0"><div></div></div>
            </div>
            <div v-else class="content split"></div>
            <ul ref="menuUL" v-if="menu.menuList.length!==0&&menu.content.length!==0"
                :style='{display: showAll?"block":"none"}'>
               <li v-for="secondMenu in menu.menuList" :key="secondMenu.key">
                   <div class="content" v-if="secondMenu.content.length!==0">
                       {{secondMenu.content}}
                       <div class="arrow" v-if="secondMenu.menuList.length!==0"><div></div></div>
                   </div>
                   <div v-else class="content split"></div>
                   <ul  ref="secondMenuUL" v-if="secondMenu.menuList.length!==0&&secondMenu.content.length!==0"
                        :style='{display: showAll?"block":"none"}'>
                       <li v-for="thirdMenu in secondMenu.menuList" :key="thirdMenu.key">
                           <div class="content" v-if="thirdMenu.content.length!==0">
                               {{thirdMenu.content}}
                           </div>
                           <div v-else class="content split"></div>
                       </li>
                   </ul>
               </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    let getOffset = {
        top: function (obj) {
            return obj.offsetTop + (obj.offsetParent ? getOffset.top(obj.offsetParent) : 0)
        },
        left: function (obj) {
            return obj.offsetLeft + (obj.offsetParent ? getOffset.left(obj.offsetParent) : 0)
        }
    };
    export default {
        name: "multi-level-context-menu",
        data: function () {
            let menuList = [
                {key: 1, content: "第一课", menuList: [
                        {key: 1, content: "网页特效原理分析", menuList: [
                            ]},
                        {key: 2, content:"响应用户操作", menuList: [
                            ]},
                        {key: 3, content:"", menuList: [
                            ]},
                        {key: 4, content:"提示框效果", menuList: [
                            ]},
                        {key: 5, content:"事件驱动", menuList: [
                            ]},
                        {key: 6, content:"元素属性操作", menuList: [
                            ]},
                    ]},
                {key: 2, content: "第二课", menuList: [
                        {key: 1, content: "改变网页背景颜色", menuList: [
                            ]},
                        {key: 2, content:"函数传参", menuList: [
                            ]},
                        {key: 3, content: "高重用性函数的编写", menuList: [
                            ]},
                        {key: 4, content: "126邮箱全选效果", menuList: [
                            ]},
                        {key: 5, content: "循环及遍历操作", menuList: [
                            ]},
                    ]},
                {key: 3, content:"", menuList: [

                    ]},
                {key: 4, content: "第三课", menuList: [
                        {key: 1, content: "JavaScript组成", menuList: [
                                {key: 1, content: "ECMAScript"},
                                {key: 2, content:"DOM"},
                                {key: 3, content: "BOM"},
                                {key: 4, content: ""},
                                {key: 5, content: "JavaScript兼容性来源"},
                            ]},
                        {key: 2, content:"JavaScript出现的位置、优缺点", menuList: [
                            ]},
                        {key: 3, content: "变量、类型、typeof、数据类型转换、变量作用域", menuList: [
                            ]},
                        {key: 4, content: "闭包", menuList: [
                                {key: 1, content: "什么是闭包"},
                                {key: 2, content:"简单应用"},
                                {key: 3, content: "闭包缺点"},
                            ]},
                        {key: 5, content: "运算符", menuList: [
                            ]},
                        {key: 6, content: "程序流程控制", menuList: [
                            ]},
                        {key: 7, content: "定时器的使用", menuList: [
                                {key: 1, content: "setInterval"},
                                {key: 2, content:"setTimeout"},
                            ]},
                    ]},
            ];
            let showAll = true;
            return {
                menuList,
                showAll,
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                let allContentList = _this.$refs.root.getElementsByClassName("content");
                let widthMap = new Map();
                for(let i=0; i<allContentList.length; i++) {
                    if (widthMap.has(allContentList[i].parentNode.parentNode)){
                        if (allContentList[i].clientWidth > widthMap.get(allContentList[i].parentNode.parentNode)){
                            widthMap.set(allContentList[i].parentNode.parentNode, allContentList[i].clientWidth);
                        }
                    }else{
                        widthMap.set(allContentList[i].parentNode.parentNode, allContentList[i].clientWidth);
                    }
                }
                for(let i=0; i<allContentList.length; i++) {
                    if (widthMap.has(allContentList[i].parentNode.parentNode)){
                        allContentList[i].style.width = widthMap.get(allContentList[i].parentNode.parentNode) + "px";
                    }
                }

                let allULList = _this.$refs.root.getElementsByTagName("ul");
                let zIndex = 1;
                _this.$refs.root.style.zIndex = zIndex++;
                for(let i=0; i<allULList.length; i++) {
                    allULList[i].style.zIndex = zIndex++;
                }

                _this.showAll = false;

                let allLIList = _this.$refs.root.getElementsByTagName("li");
                for(let i=0; i<allLIList.length; i++) {
                    allLIList[i].onmouseover = function () {
                        let _liThis = this;
                        let ul = allLIList[i].getElementsByTagName("ul");
                        if (ul[0]){
                            if (typeof(_liThis.hideTimer) !== "undefined") {
                                clearTimeout(_liThis.hideTimer);
                                delete _liThis.hideTimer;
                            }
                            if (typeof(_liThis.showTimer) !== "undefined") {
                                clearTimeout(_liThis.showTimer);
                                delete _liThis.showTimer;
                            }
                            _liThis.showTimer = setTimeout(function () {
                                for (let j = 0; j < allLIList[i].parentNode.children.length; j++) {
                                    if ( allLIList[i].parentNode.children[j].getElementsByTagName("ul")[0]) {
                                        allLIList[i].parentNode.children[j].getElementsByTagName("ul")[0].style.display = "none";
                                    }
                                }
                                ul[0].style.display = "block";
                                ul[0].style.left = ul[0].parentNode.clientWidth+"px";
                                ul[0].style.top  = ul[0].parentNode.childNodes[0].clientHeight/2+"px";
                                getOffset.left(ul[0])+ul[0].clientWidth>window.innerWidth && (ul[0].style.left=-ul[0].clientWidth+"px");
                                getOffset.top(ul[0])+ul[0].clientHeight>window.innerHeight && (ul[0].style.top=-(ul[0].clientHeight-ul[0].parentNode.childNodes[0].clientHeight/2)+"px");
                            }, 300);
                        }
                    };

                    allLIList[i].onmouseout = function () {
                        let _liThis = this;
                        let ul = allLIList[i].getElementsByTagName("ul");
                        if (ul[0]){
                            if (typeof(_liThis.hideTimer) !== "undefined") {
                                clearTimeout(_liThis.hideTimer);
                                delete _liThis.hideTimer;
                            }
                            if (typeof(_liThis.showTimer) !== "undefined") {
                                clearTimeout(_liThis.showTimer);
                                delete _liThis.showTimer;
                            }
                            _liThis.hideTimer = setTimeout(function () {
                                for (let j = 0; j < allLIList[i].parentNode.children.length; j++) {
                                    if ( allLIList[i].parentNode.children[j].getElementsByTagName("ul")[0]) {
                                        allLIList[i].parentNode.children[j].getElementsByTagName("ul")[0].style.display = "none";
                                    }
                                }
                            }, 300);
                        }
                    };
                }

            });

            document.oncontextmenu = function () {
                let ul = _this.$refs.root;
                ul.style.display = "block";
                ul.style.left = (event.clientX+ul.clientWidth>window.innerWidth?event.clientX-ul.clientWidth:event.clientX)+"px";
                ul.style.top = (event.clientY+ul.clientHeight>window.innerHeight?event.clientY-ul.clientHeight:event.clientY)+"px";
                return false;
            };

            document.onclick = function () {
                _this.$refs.root.style.display = "none";
            };
        },
        destroyed() {
            document.oncontextmenu = function () {
                return true;
            }
        }
    }
</script>

<style scoped>
    li{
        list-style-type: none;
        margin: 0px;
        position: relative;
    }
    .content{
        margin: 0px;
        padding: 0px 25px 0px 25px;
        min-width: 1px;
        height: 25px;
        line-height: 25px;
        white-space: nowrap;
        text-align: left;
        font-size:12px;
        font-family: \5fae\8f6f\96c5\9ed1;
    }
    .content:hover{
        background-color: rgba(79, 79, 79, 0.6);
        cursor: pointer;
    }
    .split{
        margin: 5px 0px 5px 0px;
        padding: 0px;
        width: available;
        height: 0px;
        border-top: 2px groove rgba(213, 213, 213, 0.2);
    }
    .split:hover{
        background-color: transparent;
        cursor: default;
    }
    .arrow{
        position: absolute;
        top: 0px;
        right: 5px;
        margin: 0px;
        padding: 0px;
        text-align: center;
    }
    .arrow div{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 0;
        height: 0;
        border-left: 5px solid  #000000 ;
        border-top: 5px solid transparent ;
        border-bottom: 5px solid transparent ;
    }
    ul{
        position: absolute;
        margin: 0px;
        padding: 0px;
        top: 0px;
        left: 0px;
        background-color: #ffffff;
        box-shadow:2px 2px 2px rgba(0,0,0,.6);
        border: 1px solid #dadada;
        border-radius: 2px;
        z-index: 1;
    }
</style>