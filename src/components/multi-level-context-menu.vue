<template>
    <ul class="first-level">
        <li v-for="menu in menuList" :key="menu.key">
            <div class="space-hold"></div>
            <div class="content">{{menu.content}}</div>
            <div class="arrow" v-if="menu.secondMenuList.length !== 0">&#8250;</div>
            <ul class="second-level" v-if="menu.secondMenuList.length !== 0">
               <li v-for="secondMenu in menu.secondMenuList" :key="secondMenu.key">
                   <div class="space-hold"></div>
                   <div class="content">{{secondMenu.content}}</div>
                   <div class="arrow" v-if="secondMenu.thirdMenuList.length !== 0">&#8250;</div>
                   <ul  class="third-level" v-if="secondMenu.thirdMenuList.length !== 0">
                       <li v-for="thirdMenu in secondMenu.thirdMenuList" :key="thirdMenu.key">
                           <div class="space-hold"></div>
                           <div class="content">{{thirdMenu.content}}</div>
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
                {key: 1, content: 1, secondMenuList: [
                    ]},
                {key: 2, content: 2, secondMenuList: [
                        {key: 1, content: 1, thirdMenuList: [
                                ]},
                        {key: 2, content: 2, thirdMenuList: [
                            ]},
                    ]},
                {key: 3, content: 3, secondMenuList: [
                        {key: 1, content: 1, thirdMenuList: [
                            ]},
                        {key: 2, content: 2, thirdMenuList: [
                                {key: 1, content: 1},
                                {key: 2, content: 2},
                            ]},
                    ]},
            ];
            return {
                menuList,
            }
        },
    }
</script>

<style scoped>
    li{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        height: 25px;
        clear: both;
    }
    .space-hold{
        float: left;
        margin: 0px;
        padding: 0px;
        width: 25px;
        height: 25px;
        line-height: 25px;
        border-right: 2px solid #a5a5a5;
    }
    .content{
        float: left;
        margin: 0px;
        padding: 0px;
        min-width: 100px;
        height: 25px;
        line-height: 25px;
        text-align: left;
    }
    .arrow{
        float: left;
        margin: 0px;
        padding: 0px;
        height: 25px;
        line-height: 25px;
    }
    .first-level{
        float: left;
        margin: 0px;
        padding: 0px;
        background-color: #e2e2e2;
        border: 1px solid #838383;
    }
    .second-level, .third-level{
        position: absolute;
        float: left;
        margin: 0px;
        padding: 0px;
        background-color: #e2e2e2;
        border: 1px solid #838383;
    }
</style>