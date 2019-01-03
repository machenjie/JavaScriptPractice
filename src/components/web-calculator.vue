<template>
    <div id="root">
        <div id="input-area">{{inputText}}</div>
        <div id="current-area">{{currentText}}</div>
        <ol id="key-area">
            <li v-for="key in keyList" :key="key.key" :style="keyStyleList[key.key-1]"
                @click="keyInput(key.content)">
                {{key.content}}
            </li>
        </ol>
    </div>
</template>

<script>
    const OP_INIT_STYLE = {
        height: "60px",
        width: "100px",
        lineHeight: "60px",
    };
    const EQUAL_INIT_STYLE = {
        height: "140px",
        width: "100px",
        lineHeight: "140px",
    };
    const NUMBER_INIT_STYLE = {
        height: "60px",
        width: "100px",
        lineHeight: "60px",
    };
    const ZERO_INIT_STYLE = {
        height: "60px",
        width: "220px",
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
                {key: 1, keyType: "OP_TYPE", content: "*"},
                {key: 2, keyType: "OP_TYPE", content: "/"},
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
            let inputText = "";
            let currentText = "";
            return {
                keyList,
                keyStyleList,
                inputText,
                currentText,
            }
        },
        methods: {
            keyInput: function (content) {
                const op_regex = /[\.\*\/\+\-]/
                if (content === "C"){
                    this.currentText = "";
                    this.inputText = "";
                    return;
                }
                if (this.currentText === "" && op_regex.test(content)){
                    this.currentText = "0";
                }
                if (this.currentText === "0" && !op_regex.test(content)){
                    this.currentText = "";
                }
                if (content !== "="){
                    this.currentText = this.currentText+content;
                }
                else{
                    this.inputText = this.currentText+content;
                    try {
                        this.currentText = eval(this.currentText ) + "";
                    }
                    catch (e) {
                        this.inputText = "";
                        this.currentText = "0";
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 500px;
    }
    #input-area{
        margin: 0px;
        padding-left: 20px;
        padding-right: 20px;
        height: 30px;
        text-align: right;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #e2e2e2;
        color: #505050;
        font-size: 1.5rem;
        line-height: 30px;
        overflow: hidden;
    }
    #current-area{
        margin: 0px;
        padding-left: 20px;
        padding-right: 20px;
        height: 40px;
        text-align: right;
        background-color: #e2e2e2;
        color: #505050;
        font-size: 2.5rem;
        line-height: 40px;
        overflow: hidden;
    }
    #key-area{
        float: right;
        margin: 0px;
        padding-left: 20px;
        padding-bottom: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #3e3e3e;
    }
    #key-area li{
        float: right;
        margin-top: 20px;
        margin-right: 20px;
        border-radius: 5px;
        padding: 0px;
        background: linear-gradient(#a5a5a5, #7a7a7a,#505050);
        font-size: 2rem;
        color: #e2e2e2;
        cursor: pointer;
        list-style-type: none;
    }
    #key-area li:hover{
        background: linear-gradient(#505050,#7a7a7a,#a5a5a5);
    }
</style>