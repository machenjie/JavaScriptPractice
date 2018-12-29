<template>
    <div id="root">
        <div id="select-area">
            <input id="select-all" type="checkbox" name="check-all" v-model="allChecked" @click="checkedAll">
            <label for="select-all" :style='{color: allChecked?"#000000":"#969696"}'>all</label>
            <a @click="reverseChecked">reverse</a>
        </div>
        <div class="check" v-for="checkItem in checkInfoList" :key="checkItem.key">
            <input type="checkbox" name="check-it" v-model="checkedList[checkItem.key-1]" :id='"check-"+checkItem.key'>
            <label :v-for='"check-"+checkItem.key'>{{checkItem.content}}</label>
        </div>
    </div>
</template>

<script>
    
    function initCheckedList(checkInfoList) {
        let checkedList = new Array(checkInfoList.length);
        for(let i=0; i<checkedList.length; i++){
            checkedList[i]=false;
        }
        return checkedList;
    }
    function checkedListAllSelected(checkInfoList) {
        let checkedList = new Array(checkInfoList.length);
        for(let i=0; i<checkedList.length; i++){
            checkedList[i]=true;
        }
        return checkedList;
    }
    function reverseCheckedList(oldCheckedList) {
        let checkedList = new Array(oldCheckedList.length);
        for(let i=0; i<checkedList.length; i++){
            checkedList[i]=!oldCheckedList[i];
        }
        return checkedList;
    }
    function isAllChecked(checkedList) {
        for(let i=0; i<checkedList.length; i++){
            if (!checkedList[i]){
                return false;
            }
        }
        return true;
    }
    export default {
        name: "checkbox-use",
        data: function () {
            let checkInfoList = [
                {key: 1, content: "option (1)"},
                {key: 2, content: "option (2)"},
                {key: 3, content: "option (3)"},
                {key: 4, content: "option (4)"},
                {key: 5, content: "option (5)"},
                {key: 6, content: "option (6)"},
                {key: 7, content: "option (7)"},
            ];
            let checkedList = initCheckedList(checkInfoList);
            let allChecked = isAllChecked(checkedList);
            return {
                checkInfoList,
                checkedList,
                allChecked,
            };
        },
        watch: {
            checkedList: function (val) {
                this.allChecked = isAllChecked(val);
            }
        },
        methods: {
            reverseChecked: function () {
                let checkedList = reverseCheckedList(this.checkedList);
                this.checkedList = checkedList;
                this.allChecked = isAllChecked(this.checkedList);
            },
            checkedAll: function () {
                this.allChecked = !this.allChecked;
                let checkedList = this.allChecked?checkedListAllSelected(this.checkInfoList):initCheckedList(this.checkInfoList);
                this.checkedList = checkedList;
            }
        }
    }
</script>

<style scoped>

    #root{
        display: inline-block;
        margin: 0px 0px 0px 0px;
        padding: 5px 5px 5px 5px;
        border: 1px solid #000000;
        border-radius: 5px;
        text-align: left;
    }
    #select-area{
        display: block;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        border-bottom: 1px solid #000000;
    }
    #select-area input{
        display: inline-block;
        margin: 5px 5px 5px 5px;
        padding: 0px 0px 0px 0px;
    }
    #select-area span{
        display: inline-block;
        margin: 5px 5px 5px 5px;
        padding: 0px 0px 0px 0px;
        width: 35px;
        font-weight: bold;
        text-align: left;
    }
    #select-area a{
        display: inline-block;
        margin: 5px 5px 5px 5px;
        padding: 0px 0px 0px 0px;
        color: #0838ff;
    }
    #select-area a:hover{
        color: red;
        cursor: pointer;
    }
    .check input{
        display: inline-block;
        margin: 5px 5px 5px 5px;
        padding: 0px 0px 0px 0px;
    }
    .check label{
        display: inline-block;
        margin: 5px 5px 5px 5px;
        padding: 0px 0px 0px 0px;
    }
</style>