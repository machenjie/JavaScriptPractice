<template>
    <div id="root">
        <div id="input-name-area" class="form-group">
            <label id="css-name-label" for="css-name">css name:</label>
            <input id="css-name" class="form-control" type="text" name="css-name" v-model="cssName">
        </div>
        <div id="input-value-area" class="form-group">
            <label id="css-value-label" for="css-value">css value:</label>
            <input id="css-value" class="form-control" type="text" name="css-name" v-model="cssValue">
        </div>
        <div id="action-area">
            <button id="change" class="btn btn-info" @click="changeCSS">change</button>
            <button id="reset" class="btn btn-info" @click="displayStyle={}">reset</button>
        </div>
        <div id="display-area">
            <div id="display" class="display" :style="displayStyle">
                input the css name/value and click the change button
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "css-modify",
        data: function () {
            return {
                cssName:"",
                cssValue:"",
                displayStyle:{},
            }
        },
        methods: {
            changeCSS: function () {
                this.displayStyle[this.cssName] = this.cssValue;
                this.displayStyle = Object.assign({}, this.displayStyle);
            },
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
    }
    label{
        display: inline-block;
        width: auto;
        text-align: right;
    }
    input{
        display: inline-block;
        width: 70%;
    }
    #action-area{
        text-align: right;
    }
    button{
        width: 75px;
        margin-left: 5px;
        margin-right: 5px;
    }
    #display-area{
        text-align: right;
    }
    .display{
        display: inline-block;
        width: 150px;
        height: 150px;
        margin-top: 10px;
        margin-right: 5px;
        padding: 2px;
        background-color: #ff5514;
        color: #ffffff;
        text-align: center;
    }
</style>