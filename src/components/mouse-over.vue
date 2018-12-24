<template>
    <div id="root" class= "root" :class='{"mouse-over": isOver}' @mouseover="isOver=true" @mouseout="isOver=false">
        {{isOver?"mouse out hear":"mouse over hear"}}
    </div>
</template>

<script>
    export default {
        name: "mouse-over",
        data: function () {
            return {
                isOver: false,
            }
        }
    }
</script>

<style scoped>

    .root{
        display: inline-block;
        width: 200px;
        height: 200px;
        border: 10px solid #2f2f2f;
        padding-top: 90px;
        color: #d8d5d8;
        background-color: #2f2f2f;
        cursor: crosshair;
    }
    .mouse-over{
        border: 10px solid #ff0000;
        color: #ff0000;
        background-color: #d8d5d8;
    }


</style>