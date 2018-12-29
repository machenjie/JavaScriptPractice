<template>
    <div id="root">
        <ul id="nav-tabs">
            <li class="tab" v-for="tabItem in tabItemList" :key="tabItem.key" :style="tabChangeList[tabItem.key-1].style"
                @mouseover="tabListMouseOver(tabItem.key)">
                {{tabItem.title}}
            </li>
        </ul>
        <div id="nav-content">
            <div class="content" v-for="tabItem in tabItemList" :key="tabItem.key" v-if="tabChangeList[tabItem.key-1].show" >
                <ul class="lessons">
                    <li class="lesson" v-for="lesson in tabItem.lessonList" :key="lesson.key">
                        {{lesson.content}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    const INIT_TAB_CHANGE= {
        show: false,
        style: {
            backgroundColor: "#000000",
            color: "#ffffff",
        }
    };

    const HOVER_TAB_CHANGE={
        show: true,
        style: {
            backgroundColor: "#707070",
            color: "#0f0f0f",
        }
    }

    function initTabChangeList(tabItemList) {
        let tabChangeList = new Array(tabItemList.length);
        for(let i=0; i<tabChangeList.length; i++){
            tabChangeList[i] = INIT_TAB_CHANGE;
        }
        return tabChangeList;
    }
    export default {
        name: "easy-nav-tab",
        data: function () {
            let tabItemList = [
                {key: 1, title: "first class", lessonList: [
                        {key: "1", content: "Control the Div attribute"},
                        {key: "2", content: "Web page skinning"},
                        {key: "3", content: "Invoke function with the input parameters"},
                        {key: "4", content: "Mouse move in/out to change style"},
                        {key: "5", content: "Tooltip use"},
                    ], },
                {key: 2, title: "second class", lessonList: [
                        {key: "1", content: "Dropdown use"},
                        {key: "2", content: "Access innerHTML and popover"},
                        {key: "3", content: "Sum of all the numbers"},
                        {key: "4", content: "Pop-up dialog"},
                        {key: "5", content: "Modify the css of the div"},
                        {key: "6", content: "Picture list and picture transparency"},
                        {key: "7", content: "Easy nav tab"},
                        {key: "8", content: "Easy JS Almanac"},
                        {key: "9", content: "Single button show/hide a playlist contraction expansion"},
                        {key: "10", content: "Prompt box effect"},
                        {key: "11", content: "Move the mouse over and modify the image path"},
                        {key: "12", content: "Checkbox (checkbox) select all / all not selected / back"},
                    ], },
                {key: 3, title: "third class", lessonList: [
                        {key: "1", content: "View data types with typeof"},
                        {key: "2", content: "Parse the numbers with parseInt and sum"},
                        {key: "3", content: "Accumulate button, add 1"},
                        {key: "4", content: "Enter two numbers and compare sizes"},
                        {key: "5", content: "After the page is loaded, add 1"},
                        {key: "6", content: "Determine if the number is a two-digit number"},
                        {key: "7", content: "Web calculator"},
                        {key: "8", content: "Simple web clock"},
                        {key: "9", content: "Countdown clock (100 seconds)"},
                    ], },
            ];
            let tabChangeList = initTabChangeList(tabItemList);
            tabChangeList[0] = HOVER_TAB_CHANGE;
            return {
                tabItemList,
                tabChangeList,
            }
        },
        methods: {
            tabListMouseOver: function (key) {
                this.tabChangeList = initTabChangeList(this.tabItemList);
                this.tabChangeList[key-1] = HOVER_TAB_CHANGE;
                this.tabChangeList = this.tabChangeList;
            },
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        width: 450px;
        overflow: hidden;
        border: 1px solid #000000;
        border-radius: 2px;
    }
    #nav-tabs{
        display: inline-block;
        width: 450px;
        margin: 0;
        padding: 0;
    }
    .tab{
        display: inline-block;
        width: 150px;
        margin: 0;
        padding: auto;
        border-bottom: 1px solid #000000;
        list-style-type: none;
        font-size: 1rem;
        font-weight: bold;
        cursor: default;
    }
    #nav-content{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 450px;
    }
    .lessons{
        margin-bottom: 5px;
        list-style-type: circle;
    }
    .lesson{
        margin-top: 5px;
        text-align: left;
        font-size: 0.9rem;
    }

</style>