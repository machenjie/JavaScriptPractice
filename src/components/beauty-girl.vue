<template>
    <div id="root">
        <img class="big" :src="bigImgPath">
        <img class="small" v-for="smallImgPath in smallImgPathList" :key="smallImgPath.key"
             :src='"img/beautygirl/small_"+smallImgPath.key+".jpg"'
             @mouseover='bigImgPath="img/beautygirl/big_"+smallImgPath.key+".jpg"'>
    </div>
</template>

<script>
    export default {
        name: "beauty-girl",
        data: function () {
            let smallImgPathList = [
                {key: 1},
                {key: 2},
                {key: 3},
                {key: 4},
                {key: 5},
                {key: 6},
                {key: 7},
                {key: 8},
                {key: 9},
                {key: 10},
                {key: 11},
            ];
            let bigImgPath="img/beautygirl/big_1.jpg"
            return {
                smallImgPathList,
                bigImgPath,
            };
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        width: 250px;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 10px 10px;
        border-radius: 5px;
        background-color: #e2e2e2;
    }
    .big{
        float: left;
        width: 170px;
        height: 170px;
        margin: 10px 10px 0px 0px;
        padding: 5px;
        border-radius: 5px;
    }
    .small{
        width: 50px;
        height: 50px;
        margin: 10px 10px 0px 0px;
        padding: 0px;
        border-radius: 2px;
        cursor: pointer;
    }
</style>