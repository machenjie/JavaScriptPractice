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
            <button id="change" class="btn btn-info">change</button>
            <button id="reset" class="btn btn-info">reset</button>
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
            }
        }
    }
</script>

<style scoped>
    label{
        display: inline-block;
        width: 10%;
        text-align: right;
    }
    input{
        display: inline-block;
        width: 30%;
    }
</style>