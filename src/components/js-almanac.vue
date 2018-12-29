<template>
    <div id="root">
        <ul id="almanac-area">
            <li class="almanac" v-for="almanac in almanacList" :key="almanac.key"
                :style="almanacChangeList[almanac.key-1].style"
                @mouseover="almanacListMouseOver(almanac.key)">
                <strong>{{almanac.monthNumber}}</strong>
                {{almanac.monthWord}}
            </li>
        </ul>
        <ul id="almanac-detail-area" >
            <li class="almanac-detail" v-for="almanac in almanacList" :key="almanac.key" v-if="almanacChangeList[almanac.key-1].show">
                <strong>{{almanac.detailDec}}</strong>
                <div class="almanac-detail-info" v-for="detailInfo in almanac.detailInfoList">{{detailInfo}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    const INIT_ALMANAC_CHANGE={
        style: {
            backgroundColor: "#3e3e3e",
            color: "#ffffff"
        },
        show: false,
    };
    const HOVER_ALMANAC_CHANGE={
        style: {
            backgroundColor: "#9b9b9b",
            color: "#ff4b52"
        },
        show: true,
    };
    
    function initAlmanacChangeList(almanacList) {
        let almanacChangeList = new Array(almanacList.length);
        for(let i=0; i<almanacChangeList.length; i++){
            almanacChangeList[i] = INIT_ALMANAC_CHANGE;
        }
        return almanacChangeList;
    }
    
    export default {
        name: "js-almanac",
        data: function () {
            let almanacList = [
                {key: 1, monthNumber: "1", monthWord: "JAN", detailDec: "1月节日", detailInfoList: [
                        "元旦：1月1日至3日放假三天",
                    ],},
                {key: 2, monthNumber: "2", monthWord: "FER", detailDec: "2月节日", detailInfoList: [
                        "春节：2月2日至8日放假7天",
                    ],},
                {key: 3, monthNumber: "3", monthWord: "MAR", detailDec: "3月节日", detailInfoList: [
                        "妇女节：3月8日妇女节",
                    ],},
                {key: 4, monthNumber: "4", monthWord: "APR", detailDec: "4月节日", detailInfoList: [
                        "清明节：4月3日至5日放假3天",
                    ],},
                {key: 5, monthNumber: "5", monthWord: "MAY", detailDec: "5月节日", detailInfoList: [
                        "劳动节：5月1日至5月3日放假3天",
                    ],},
                {key: 6, monthNumber: "6", monthWord: "JUN", detailDec: "6月节日", detailInfoList: [
                        "端午节：6月4日至6日放假3天",
                    ],},
                {key: 7, monthNumber: "7", monthWord: "JUL", detailDec: "7月节日", detailInfoList: [
                        "小暑：7月7日小暑",
                    ],},
                {key: 8, monthNumber: "8", monthWord: "AUG", detailDec: "8月节日", detailInfoList: [
                        "七夕节：8月6日七夕节",
                    ],},
                {key: 9, monthNumber: "9", monthWord: "SEP", detailDec: "9月节日", detailInfoList: [
                        "中秋节：9月10日至12日放假3天",
                    ],},
                {key: 10, monthNumber: "10", monthWord: "OCT", detailDec: "10月节日", detailInfoList: [
                        "国庆节：10月1日至7日放假7天",
                    ],},
                {key: 11, monthNumber: "11", monthWord: "NOV", detailDec: "11月节日", detailInfoList: [
                        "立冬：11月8日立冬",
                    ],},
                {key: 12, monthNumber: "12", monthWord: "DEC", detailDec: "12月节日", detailInfoList: [
                        "艾滋病日:12月1日",
                        "废除奴隶制国际日:12月2日",
                    ],},
            ];
            let almanacChangeList = initAlmanacChangeList(almanacList);
            let day = new Date();
            day.setTime(Date.now());
            almanacChangeList[day.getMonth()] = HOVER_ALMANAC_CHANGE;
            return {
                almanacList,
                almanacChangeList,
            }
        },
        methods: {
            almanacListMouseOver: function (key) {
                let almanacChangeList = initAlmanacChangeList(this.almanacList);
                almanacChangeList[key-1] = HOVER_ALMANAC_CHANGE;
                this.almanacChangeList = almanacChangeList;
            }
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        width: 410px;
        padding-left: 10px;
        padding-bottom: 10px;
        background-color: #e7e7e7;
        font-family: Tahoma;
        overflow: hidden;
    }
    #almanac-area{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    .almanac{
        display: inline-block;
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px;
        width: 90px;
        height: 90px;
        font-size: 1.3rem;
        font-weight: bold;
        list-style-type: none;
        cursor: pointer;
    }
    .almanac strong{
        display: block;
        font-size: 1.5rem;
        text-align: center;
        line-height: 40px;
    }
    #almanac-detail-area{
        margin: 10px 10px 0px 0px;
        padding: 0px 0px 0px 10px;
        border: 2px solid #f5f5f5;
        background-color: #f0f0f0;
        text-align: left;
    }
    .almanac-detail{
        list-style-type: none;
    }
</style>