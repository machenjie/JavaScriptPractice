<template>
    <ul ref="root" :style='{display: showAll?"block":"none"}'
    >
        <li v-for="menu in menuList" :key="menu.key">
            <div class="content">
                {{menu.content}}
                <div class="arrow" v-if="menu.secondMenuList.length !== 0"><div></div></div>
            </div>
            <ul ref="menuUL" v-if="menu.secondMenuList.length!==0"
                :style='{display: showAll?"block":"none"}'
            >
               <li v-for="secondMenu in menu.secondMenuList" :key="secondMenu.key">
                   <div class="content">
                       {{secondMenu.content}}
                       <div class="arrow" v-if="secondMenu.thirdMenuList.length!== 0"><div></div></div>
                   </div>
                   <ul  ref="secondMenuUL" v-if="secondMenu.thirdMenuList.length!==0"
                        :style='{display: showAll?"block":"none"}'
                   >
                       <li v-for="thirdMenu in secondMenu.thirdMenuList" :key="thirdMenu.key">
                           <div class="content">
                               {{thirdMenu.content}}
                           </div>
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
                {key: 1, content: 12344444, secondMenuList: [
                    ]},
                {key: 2, content: 2222, secondMenuList: [
                    ]},
                {key: 3, content: 3333, secondMenuList: [
                        {key: 1, content: 1454, thirdMenuList: [
                                {key: 1, content: 1234},
                                {key: 2, content: 224},
                            ]},
                        {key: 2, content: 22, thirdMenuList: [
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
                // let allULList = _this.$refs.root.getElementsByTagName("ul");
                // for(let i=0; i<allULList.length; i++) {
                //     allULList[i].style.top = allULList[i].parentNode.clientHeight/2+"px";
                //     allULList[i].style.left =  allULList[i].parentNode.clientWidth+"px";
                // }

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

                _this.showAll = false;

                let showTimer = null;
                let hideTimer = null;
                let allLIList = _this.$refs.root.getElementsByTagName("li");
                for(let i=0; i<allLIList.length; i++) {
                    allLIList[i].onmouseover = function () {
                        let ul = allLIList[i].getElementsByTagName("ul");
                        if (ul[0]){
                            clearTimeout(hideTimer);
                            showTimer = setTimeout(function () {
                                for (i = 0; i < allLIList[i].parentNode.children.length; i++) {
                                    if ( allLIList[i].parentNode.children[i].getElementsByTagName("ul")[0]) {
                                        allLIList[i].parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none";
                                    }
                                }
                                ul[0].style.display = "block";
                                ul[0].style.left = ul[0].parentNode.clientWidth+"px";
                                ul[0].style.top  = ul[0].parentNode.clientHeight+"px";
                                getOffset.left(ul[0])+ul[0].parentNode.clientWidth>window.innerWidth && (ul[0].style.left=-ul[0].parentNode.clientWidth+"px");
                                getOffset.top(ul[0])+ul[0].parentNode.clientHeigth>window.innerHeight && (ul[0].style.top=-ul[0].parentNode.clientHeight+"px");
                            }, 500);
                        }
                    };

                    allLIList[i].onmouseout = function () {
                        
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
        height: 25px;
        position: relative;
        clear: both;
    }
    li:hover{
        background-color: rgba(79, 79, 79, 0.6);;
    }
    .content{
        float: left;
        margin: 0px 0px 0px 25px;
        padding: 0px 25px 0px 5px;
        min-width: 1px;
        height: 25px;
        border-left: 2px groove rgba(230, 230, 230, 0.1);
        line-height: 25px;
        text-align: left;
        position: relative;
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
        left: 150px;
        background-color: #ffffff;
        box-shadow:2px 2px 2px rgba(0,0,0,.6);
        border: 1px solid #dadada;
        border-radius: 2px;
    }
</style>