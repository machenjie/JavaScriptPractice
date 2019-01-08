<template>
    <div id="root">
        Please right-click to see the context menu.
        <ul id="context-menu" v-if="contextMenuShow" :style='{top: contextMenuY+"px", left: contextMenuX+"px"}'>
            <li v-for="menu in menuList" :key="menu.key">{{menu.content}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "custom-context-menu",
        data: function () {
            let menuList = [
                {key: 1, content: "cut"},
                {key: 2, content: "paste"},
                {key: 3, content: "copy"},
            ];
            let contextMenuShow = false;
            let contextMenuX = 0;
            let contextMenuY = 0;
            return {
                menuList,
                contextMenuShow,
                contextMenuX,
                contextMenuY,
            }
        },
        mounted() {
            let _this = this;
            document.oncontextmenu = function () {
                _this.contextMenuX = event.clientX;
                _this.contextMenuY = event.clientY;
                _this.contextMenuX = _this.contextMenuX+90>window.innerWidth?window.innerWidth-90: _this.contextMenuX;
                _this.contextMenuY = _this.contextMenuY+100>window.innerHeight?window.innerHeight-100:_this.contextMenuY;
                _this.contextMenuShow = true;
                return false;
            }
            document.onclick = function () {
                _this.contextMenuShow = false;
            }
        },
        destroyed() {
            document.oncontextmenu = function () {
                return true;
            }
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #ff5514;
    }
    #context-menu{
        position: absolute;
        margin: 0px;
        padding: 0px;
        background-color: #eeeeee;
        border: 1px solid #cbcbcb;
        border-radius: 1px;
    }
    #context-menu li{
        display: block;
        list-style-type: none;
        margin: 0px;
        padding: 0px 10px 0px 5px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        font-size: 1rem;
        font-weight: normal;
        color: #000;
        text-align: left;
        cursor: pointer;
    }
    #context-menu li:hover{
        background-color: #b5b5b5;
    }
</style>