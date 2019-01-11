<template>
    <div id="root">
        <img id="background" :src="currentStatImgList[lock?0:1]">
        <img id="btn" src="img/iphone/btn.jpg" v-if="lock">
    </div>
</template>

<script>
    export default {
        name: "iphone-unlock",
        data: function () {
            let currentStatImgList=[
                "img/iphone/1.jpg",
                "img/iphone/2.jpg",
            ];
            let lock = true;
            return {
                currentStatImgList,
                lock,
            }
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        position: relative;
        margin: 0;
        padding: 0;
    }
    #background{
        display: block;
        margin: 0;
        padding: 0;
    }
    #btn{
        position: absolute;
        bottom: 33px;
        left: 30px;
        border-radius: 10px;
    }
</style>