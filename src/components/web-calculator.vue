<template>
    <div id="root">
        <div id="input-area"></div>
        <div id="current-area"></div>
        <ol id="key-area">
            <li v-for="key in keyList" :key="key.key" :style="keyStyleList[key.key-1]">{{key.content}}</li>
        </ol>
    </div>
</template>

<script>
    const OP_INIT_STYLE = {
        height: "60px",
        width: "80px",
        lineHeight: "60px",
    };
    const EQUAL_INIT_STYLE = {
        height: "120px",
        width: "80px",
        lineHeight: "120px",
    };
    const NUMBER_INIT_STYLE = {
        height: "60px",
        width: "80px",
        lineHeight: "60px",
    };
    const ZERO_INIT_STYLE = {
        height: "60px",
        width: "160px",
        lineHeight: "60px"
    };
    const KEY_TYPE_STYLE_MAP = new Map([
        ['OP_TYPE', OP_INIT_STYLE],
        ['EQUAL_TYPE', EQUAL_INIT_STYLE],
        ['NUMBER_TYPE', NUMBER_INIT_STYLE],
        ['ZERO_TYPE', ZERO_INIT_STYLE],
    ]);
    function initKeyStyle(keyList) {
        let keyStyleList = new Array(keyList.length);
        for(let i=0; i< keyStyleList.length; i++){
            keyStyleList[i] = KEY_TYPE_STYLE_MAP.get(keyList[i].keyType);
        }
        return keyStyleList;
    }
    export default {
        name: "web-calculator",
        data: function () {
            let keyList=[
                {key: 1, keyType: "OP_TYPE", content: "×"},
                {key: 2, keyType: "OP_TYPE", content: "÷"},
                {key: 3, keyType: "OP_TYPE", content: "%"},
                {key: 4, keyType: "OP_TYPE", content: "C"},
                {key: 5, keyType: "OP_TYPE", content: "-"},
                {key: 6, keyType: "NUMBER_TYPE", content: "9"},
                {key: 7, keyType: "NUMBER_TYPE", content: "8"},
                {key: 8, keyType: "NUMBER_TYPE", content: "7"},
                {key: 9, keyType: "OP_TYPE", content: "+"},
                {key: 10, keyType: "NUMBER_TYPE", content: "6"},
                {key: 11, keyType: "NUMBER_TYPE", content: "5"},
                {key: 12, keyType: "NUMBER_TYPE", content: "4"},
                {key: 13, keyType: "EQUAL_TYPE", content: "="},
                {key: 14, keyType: "NUMBER_TYPE", content: "3"},
                {key: 15, keyType: "NUMBER_TYPE", content: "2"},
                {key: 16, keyType: "NUMBER_TYPE", content: "1"},
                {key: 17, keyType: "NUMBER_TYPE", content: "."},
                {key: 18, keyType: "ZERO_TYPE", content: "0"},
            ];
            let keyStyleList = initKeyStyle(keyList);
            return {
                keyList,
                keyStyleList,
            }
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 320px;
    }
    #input-area{
        margin: 0px;
        padding: 0px;
        height: 40px;
        background-color: #ff5514;
    }
    #current-area{
        margin: 0px;
        padding: 0px;
        height: 80px;
        background-color: #ff5514;
    }
    #key-area{
        float: right;
        margin: 0px;
        padding: 0px;
    }
    #key-area li{
        float: right;
        margin: 0px;
        padding: 0px;
        background-color: #fcfcfc;
        cursor: pointer;
        list-style-type: none;
    }
</style>