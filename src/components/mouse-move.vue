<template>
    <div id="root">
        <ul id="shirt-area">
            <li v-for="shirt in shirtList" :key="shirt.key"
                @mouseover="currentShowShirt=shirt.key"
                @mouseout="currentShowShirt=0"
                @mousemove="mouseMove"
            >
                <img :src='"img/shirt/shirt_"+shirt.key+".jpg"'>
            </li>
        </ul>
        <img id="shirt-show-area" :src='"img/shirt/shirt_"+currentShowShirt+"_big.jpg"'
             :style='{top: currentShowShirtY+"px", left: currentShowShirtX+"px"}'
             v-if="currentShowShirt !== 0">
    </div>
</template>

<script>
    export default {
        name: "mouse-move",
        data: function () {
            let shirtList = [
                {key: 1},
                {key: 2},
                {key: 3},
                {key: 4},
            ];
            let currentShowShirt = 0;
            let currentShowShirtX = 0;
            let currentShowShirtY = 0;
            return {
                shirtList,
                currentShowShirt,
                currentShowShirtX,
                currentShowShirtY
            }
        },
        methods: {
            mouseMove: function () {
                this.currentShowShirtX = event.clientX+10;
                this.currentShowShirtY = event.clientY+20;
            },
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #shirt-area{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #shirt-area li{
        display: inline-block;
        margin: 0px 20px 0px 0px;
        padding: 0px;
        border: 1px solid #dad7e0;
        cursor: pointer;
        list-style-type: none;
    }
    #shirt-area li:hover{
        border: 1px solid #2c2b4b;
    }
    #shirt-show-area{
        position: absolute;
        margin: 0px;
        padding: 0px;
        border: 2px solid #cbcbcb;
    }
</style>