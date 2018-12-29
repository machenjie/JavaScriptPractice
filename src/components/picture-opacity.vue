<template>
    <ul id="root">
        <li id="img-item-area" v-for="image in images" :key="image.key">
            <img :src="'img/carlogo/'+image.key+'.jpg'" :style="imgStyleList[image.key-1]"
                 @mouseover="changeOpacity(image.key-1)"
                 @mouseout="resetOpacity"
            >
        </li>
    </ul>
</template>

<script>
    const INIT_IMG_STYLE = {
        opacity: "0.3",
        /*filter: "opacity(30%)",*/
    }
    const HOVER_IMG_STYLE = {
        opacity: "1",
        /*filter: "opacity(100%)",*/
    }
    function initImagesStyleFromImageList(val) {
        let imgStyleList = new Array(val.length);
        for (let i = 0; i < val.length; i++) {
            imgStyleList[i] = INIT_IMG_STYLE;
        }
        return imgStyleList;
    }

    export default {
        name: "picture-opacity",
        data: function () {
            let images = [
                { key: 1},
                { key: 2},
                { key: 3},
                { key: 4},
                { key: 5},
                { key: 6},
                { key: 7},
                { key: 8},
                { key: 9},
                { key: 10},
            ];
            let imgStyleList = initImagesStyleFromImageList(images);
            return {
                images,
                imgStyleList,
            }
        },
        methods: {
            changeOpacity: function (index) {
                let imgStyleList = initImagesStyleFromImageList(this.images);
                imgStyleList[index] = HOVER_IMG_STYLE;
                this.imgStyleList = imgStyleList;
            },
            resetOpacity: function () {
                this.imgStyleList = initImagesStyleFromImageList(this.images);
            }
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        width: 712px;
        margin: 0 auto;
        padding:0 0 10px 10px;;
        overflow: hidden;
        border: 1px solid #000000;
        border-radius: 2px;
        text-align: center;
    }
    #img-item-area{
        float: left;
        width: 130px;
        height: 130px;
        margin: 10px 10px 0 0;
        border: 1px solid #707070;
        border-radius: 2px;
        list-style-type: none;
    }
</style>