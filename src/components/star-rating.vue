<template>
    <div id="root">
        <p id="tittle">
            请打分:
        </p>
        <ul id="star-area">
            <li v-for="star in starList" :key="star.key"
                data-toggle="tooltip" :title="star.tooltip" data-placement="bottom"
            >
                <img :src="starImageList[star.key-1]"
                     @mouseover="currentStar=star.key"
                     @mouseout="currentStar=0"
                     @click="lastStar=star.key"
                >
            </li>
        </ul>
        <p id="last-star-dec">
            {{lastStarDec}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "star-rating",
        data: function(){
            let starList = [
                {key: 1, tooltip:"1分 很不满意"},
                {key: 2, tooltip:"2分 不满意"},
                {key: 3, tooltip:"3分 一般"},
                {key: 4, tooltip:"4分 满意"},
                {key: 5, tooltip:"5分 非常满意"},
            ];
            let currentStar = 0;
            let lastStar = 0;
            return {
                starList,
                currentStar,
                lastStar,
            }
        },
        computed: {
            starImageList: function () {
                let starImageList = new Array(this.starList.length);
                let tmpStar = this.currentStar!==0?this.currentStar:this.lastStar;
                for(let i=0; i<starImageList.length; i++){
                    if (tmpStar>0){
                        if (tmpStar<=2 && i<tmpStar){
                            starImageList[i] = "img/star/star_cry.png"
                            continue;
                        }
                        if (i<tmpStar){
                            starImageList[i] = "img/star/star_smile.png"
                            continue;
                        }
                    }
                    starImageList[i] = "img/star/star.png"
                }
                return starImageList;
            },
            lastStarDec: function () {
                let lastStarDec = "";
                let tmpStar = this.lastStar!==0?this.lastStar:this.currentStar;
                if (tmpStar>0){
                    lastStarDec = this.starList[tmpStar-1].tooltip;
                }
                return lastStarDec;
            },
        },
        mounted: function () {
            this.$nextTick(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #tittle{
        display: inline-block;
        text-align: right;
        margin: 0px 10px 0px 0px;
        padding: 0px;
        vertical-align: middle;
        font-size: 1rem;
    }
    #star-area{
        display: inline-block;
        margin: 0px !important;
        padding: 0px !important;
    }
    #star-area li{
        display: inline-block;
        list-style-type: none;
        margin: 0px 5px 0px 0px;
        padding: 0px 0px 0px 0px;
    }
    #star-area li img{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 25px;
        vertical-align: middle;
    }
    #last-star-dec{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 100px;
        vertical-align: middle;
        font-size: 1rem;
        text-align: left;
        color: #ff5514;
    }
</style>
<style>
    .tooltip{
        opacity: 0.7 !important; /*Make the entire tooltip not transparent*/
    }
    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
        border-top-color: #fac41a  !important; /*change the triangle color when data-placement="top"*/
    }
    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
        border-right-color: #fac41a  !important; /*change the triangle color when data-placement="right"*/
    }
    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: #fac41a  !important; /*change the triangle color when data-placement="bottom"*/
    }
    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
        border-left-color: #fac41a  !important; /*change the triangle color when data-placement="left"*/
    }
    .tooltip-inner{
        background-color: #fac41a !important; /*modify background color*/
        text-align: left !important; /*Font left aligned*/
        color:#363636 !important; /*font color*/
        border:1px solid #fac41a ; /*add boder*/
        max-width: 400px !important; /*Modify width*/
    }
</style>