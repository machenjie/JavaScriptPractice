<template>
    <div id="root">
        <div id="skin-area">
            <div class="skin" v-for="skin in skinList" :key="skin.key" :style="skin.style" @click="selectSkinKey=skin.key">
                <div id="select" v-if="selectSkinKey===skin.key">
                </div>
            </div>
        </div>
        <div id="tab-area">
            <div class="tab" :class='{"tab-border":tab.key!==tabList[tabList.length-1].key}' v-for="tab in tabList" :key="tab.key" :style="tab.style">
                <a>{{tab.text}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "web-skin",
        data: function () {
            let skinList = [
                {key: 1, style: {
                        backgroundColor: "#ff2c36",
                    }},
                {key: 2, style: {
                        backgroundColor: "#217747",
                    }},
                {key: 3, style: {
                        backgroundColor: "#545fcb",
                    }},
            ];
            let selectSkinKey = 1;
            return {
                skinList,
                selectSkinKey,
            }
        },
        computed: {
            tabList: function () {
                let backgroundColor = this.skinList[this.selectSkinKey-1].style.backgroundColor;
                return [
                    {key: 1, text: 'News', style: {
                            backgroundColor,
                        }},
                    {key: 2, text: 'Amuse', style: {
                            backgroundColor,
                        }},
                    {key: 3, text: 'Sports', style: {
                            backgroundColor,
                        }},
                    {key: 4, text: 'Film', style: {
                            backgroundColor,
                        }},
                    {key: 5, text: 'Music', style: {
                            backgroundColor,
                        }},
                    {key: 6, text: 'Travel', style: {
                            backgroundColor,
                        }},
                ];
            }
        }
    }
</script>

<style scoped>

    #root{
        display: inline-block;
        text-align: left;
    }
    #skin-area{
    }
    .skin{
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        vertical-align: middle;
        cursor: pointer;
    }
    #select{
        display: block;
        margin: 4px 4px 4px 4px;
        width: 6px;
        height: 6px;
        background-color: #ffffff;
    }
    #tab-area{
        display: inline-block;
        background-color: #ffffff;
        border: 4px solid #ffffff;
    }
    .tab{
        display: inline-block;
        width: 100px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
    }
    .tab-border{
        border-right: 4px solid #ffffff;
    }
</style>