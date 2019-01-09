<template>
    <ul ref="root" class="first-level">
        <li v-for="menu in menuList" :key="menu.key">
            <div class="content">
                {{menu.content}}
                <div class="arrow" v-if="menu.secondMenuList.length !== 0">&#8250;</div>
            </div>
            <ul ref="menuUL" class="second-level" v-if="menu.secondMenuList.length !== 0">
               <li v-for="secondMenu in menu.secondMenuList" :key="secondMenu.key">
                   <div class="content">
                       {{secondMenu.content}}
                       <div class="arrow" v-if="secondMenu.thirdMenuList.length !== 0">&#8250;</div>
                   </div>
                   <ul  ref="secondMenuUL" class="third-level" v-if="secondMenu.thirdMenuList.length !== 0">
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
            return {
                menuList,
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                let allULlist = _this.$refs.root.getElementsByTagName("ul");
                for(let i=0; i<allULlist.length; i++) {
                    allULlist[i].style.top = allULlist[i].parentNode.clientHeight/2+"px";
                    allULlist[i].style.left =  allULlist[i].parentNode.clientWidth+"px";
                }

                let allContentList = _this.$refs.root.getElementsByClassName("content");
                console.log(allContentList);
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
                console.log(widthMap);
                for(let i=0; i<allContentList.length; i++) {
                    if (widthMap.has(allContentList[i].parentNode.parentNode)){
                        allContentList[i].style.width = widthMap.get(allContentList[i].parentNode.parentNode) + "px";
                    }
                }
            })
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
    .content{
        float: left;
        margin: 0px 0px 0px 25px;
        padding: 0px 25px 0px 0px;
        min-width: 1px;
        height: 25px;
        border-left: 2px solid #a5a5a5;
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
        height: 25px;
        line-height: 25px;
    }
    .first-level, .second-level, .third-level{
        position: absolute;
        margin: 0px;
        padding: 0px;
        top: 0px;
        left: 150px;
        background-color: #e2e2e2;
        border: 1px solid #838383;
    }
</style>